import { menu } from "./utils/navbar.js";
menu();

const BASE_API = "https://loteriascaixa-api.herokuapp.com/api";

function init() {
  getLotery();
  getMegaSena();

  if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {

    setDataContest("megasena");
  setDataContest("quina");
  setDataContest("lotofacil");
  setDataContest("lotomania");
  setDataContest("timemania");
  setDataContest("duplasena");
  }
}
init();

async function getLotery() {
  try {
    const response = await fetch(`${BASE_API}`);
    const data = await response.json();
  } catch (error) {
    console.log("Erro ao buscar os jogos:", error);
  }
}

async function getMegaSena() {
  try {
    const response = await fetch(`${BASE_API}/megasena/`);
    const data = await response.json();
  } catch (error) {
    console.log("Erro ao buscar o jogo");
  }
}

async function setDataContest(gameName) {
  try {
    const response = await fetch(`${BASE_API}/${gameName}/latest`);
    const data = await response.json();

    const element = document.getElementById(`next-${gameName}`);   

    element.textContent = data.dataProximoConcurso || "Data indisponível";
  } catch (error) {
    console.error(`Erro ao carregar dados da ${gameName}:`, error);
  }
}

export { getLotery };