import { getGame } from "./utils/getGames.js";
import { menu } from "./utils/navbar.js";
menu();
import { getDuplasena } from "./utils/duplasena.js";

const BASE_API = "https://loteriascaixa-api.herokuapp.com/api";

function init() {
  document.addEventListener('DOMContentLoaded', () => {
    const currentPage = document.body.dataset.page

    switch (currentPage) {
      case "duplasena":
        getDuplasena()
        break;

        case "megasena":
          getGame("megasena");
        break
    
        case "quina":
          getGame("quina");
        break

        case "lotofacil":
          getGame("lotofacil");
        break

         case "lotomania":
          getGame("lotomania");
        break

        case "timemania":
          getGame("timemania");
        break

      default:
        console.warn('Nenhuma função especifica para está página');  
        break;
    }
  })
  getLotery();

  if (
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/"
  ) {
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
    const data = await response.json()
    return data
  } catch (error) {
    console.log("Erro ao buscar os jogos:", error);
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