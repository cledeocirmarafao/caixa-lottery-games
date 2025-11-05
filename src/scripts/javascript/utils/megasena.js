import { getLotery } from "../index.js";

const BASE_API = "https://loteriascaixa-api.herokuapp.com/api";

async function getMegaSena() {
  getLotery();
  try {
    const data = await fetch(`${BASE_API}/megasena/`);
    const response = await data.json();

    let megaSenaContest = {
      contest: response[0].concurso,
      date: response[0].data,
      numbersDrawn: response[0].dezenas,
      winners: response[0].localGanhadores[0]?.ganhadores ?? 0,
      prize: response[0].valorEstimadoProximoConcurso,
    };

    document.getElementById("contest-number").textContent =
      megaSenaContest.contest;
    document.getElementById("date").textContent = megaSenaContest.date;
    document.getElementById(
      "prize"
    ).textContent = `R$ ${megaSenaContest.prize.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

    const numbersList = document.getElementById("numbers-list");
    const numberItems = numbersList.getElementsByTagName("li");

    megaSenaContest.numbersDrawn.forEach((num, i) => {
      if (numberItems[i]) {
        numberItems[i].textContent = num;
      }
    });

    const contests = response.slice(1, 4);

    const results = document.querySelectorAll(".previous-draw-result");

    results.forEach((block, i) => {
      const contest = contests[i];
      if (!contest) return;

      const contestElement = block.querySelector(".previous__draw");
      if (contestElement) contestElement.textContent = contest.concurso;

      const dateElement = block.querySelector(".date-time");
      if (dateElement) dateElement.textContent = contest.data;

      const numbersElement = block.querySelectorAll(".numbers-result");
      if (Array.isArray(contest.dezenas)) {
        numbersElement.forEach((li, i) => {
          li.textContent = contest.dezenas[i] || "";
        });
      }
    });
  } catch (error) {
    console.log("Erro ao buscar o jogo");
  }
}
getMegaSena();
