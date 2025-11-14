const BASE_API = "https://loteriascaixa-api.herokuapp.com/api";

async function getGame(gameName) {
  try {
    const response = await fetch(`${BASE_API}/${gameName}/`);
    const data = await response.json();

    let currentGame = {
      contest: data[0].concurso,
      date: data[0].data,
      numbersDrawn: data[0].dezenas,
      winners: data[0].localGanhadores?.[0]?.ganhadores ?? 0,
      prize: data[0].valorEstimadoProximoConcurso,
    };

    document.getElementById(`${gameName}-contest-number`).textContent =
      currentGame.contest;

    document.getElementById(`${gameName}-date`).textContent = currentGame.date;

    const numbersList = document.getElementById(`${gameName}-numbers-list`);
    const numberItems = numbersList.getElementsByTagName("li");

    currentGame.numbersDrawn.forEach((num, i) => {
      if (numberItems[i]) numberItems[i].textContent = num;
    });

    document.getElementById(`${gameName}-result`).textContent =
      currentGame.winners;

    document.getElementById(
      `${gameName}-prize`
    ).textContent = `R$ ${currentGame.prize.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

    const contests = data.slice(1, 4);
    const results = document.querySelectorAll(`.${gameName}-previous-result`);

    results.forEach((block, i) => {
      const contest = contests[i];
      if (!contest) return;

      const contestElement = block.querySelector(".previous__draw");
      if (contestElement) contestElement.textContent = contest.concurso;

      const dateElement = block.querySelector(".date-time");
      if (dateElement) dateElement.textContent = contest.data;

      const numberElements = block.querySelectorAll(".numbers-result");

      if (Array.isArray(contest.dezenas)) {
        numberElements.forEach((li, i) => {
          li.textContent = contest.dezenas[i] || "";
        });
      }
    });
  } catch (error) {
    console.error(`Erro ao buscar o jogo ${gameName}:`, error);
  }
}
export { getGame };
