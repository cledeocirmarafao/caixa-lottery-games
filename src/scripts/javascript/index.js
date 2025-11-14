import { getGame } from "./services/getGames.js";
import { menu } from "./utils/navbar.js";
menu();
import { getDuplasena } from "./utils/duplasena.js";
import { hamburguer } from "./utils/hamburguer.js";
import {
  renderHome,
  renderDupla,
  renderMegasena,
  renderQuina,
  renderLotofacil,
  renderLotomania,
  renderTimemania,
  renderContact,
} from "./utils/screen.js";

const BASE_API = "https://loteriascaixa-api.herokuapp.com/api";

function init() {
  document.addEventListener("DOMContentLoaded", () => {
    const currentPage = document.body.dataset.page;
    hamburguer();
    switch (currentPage) {
      case "home":
        renderHome();
        break;

      case "duplasena":
        getDuplasena();
        renderDupla();
        break;

      case "megasena":
        getGame("megasena");
        renderMegasena();
        break;

      case "quina":
        getGame("quina");
        renderQuina();
        break;

      case "lotofacil":
        getGame("lotofacil");
        renderLotofacil();
        break;

      case "lotomania":
        getGame("lotomania");
        renderLotomania();
        break;

      case "timemania":
        getGame("timemania");
        renderTimemania();
        break;

      case "contact":
        renderContact();
        break;

      default:
        console.warn("Nenhuma função especifica para está página");
        break;
    }
  });
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
    const data = await response.json();
    return data;
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
