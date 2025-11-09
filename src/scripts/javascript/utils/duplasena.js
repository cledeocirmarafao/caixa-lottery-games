const BASE_API = "https://loteriascaixa-api.herokuapp.com/api";

async function getDuplasena() {
  try {
    const response = await fetch(`${BASE_API}/duplasena/`);
    const data = await response.json();

    const dataDuplaSena = {
      contest: data[0].concurso,
      date: data[0].data,
      firstNumbers: data[0].dezenas.slice(0, 6),
      lastNumber: data[0].dezenas.slice(6, 12),
      winners: data[0].localGanhadores?.[0]?.ganhadores ?? 0,
      prize: data[0].valorEstimadoProximoConcurso,
    };

    document.getElementById("duplasena-contest-number").textContent =
      dataDuplaSena.contest;

    document.getElementById("duplasena-date").textContent =
      dataDuplaSena.date;

    const listDuplaSena = document.getElementById("first-list-draw");
    const setDuplaList = listDuplaSena.getElementsByTagName("li");

    const secondList = document.getElementById("second-list-draw");
    const setSecondList = secondList.getElementsByTagName("li");

    dataDuplaSena.firstNumbers.forEach((num, i) => {
      if (setDuplaList[i]) {
        setDuplaList[i].textContent = num;
      }
    });

    dataDuplaSena.lastNumber.forEach((num, i) => {
      if (setSecondList[i]) {
        setSecondList[i].textContent = num;
      }
    });

    document.getElementById("duplasena-result").textContent =
      dataDuplaSena.winners;
    document.getElementById("duplasena-prize").textContent =
      dataDuplaSena.prize;

    const contests = data.slice(1, 4);
    const results = document.querySelectorAll(`.duplasena-previous-result`);

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
    console.log("Erro ao buscar os dados da Duplasena:", error);
  }
}

export { getDuplasena };