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
      prize: response[0].valorEstimadoProximoConcurso
    }

    document.getElementById("contest-number").textContent = megaSenaContest.contest;
    document.getElementById("date").textContent = megaSenaContest.date;
    document.getElementById("prize").textContent = `R$ ${megaSenaContest.prize.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    
    const numbersList = document.getElementById("numbers-list");
    const numberItems = numbersList.getElementsByTagName("li");
    
    megaSenaContest.numbersDrawn.forEach((num, i) => {
      if (numberItems[i]) {
        numberItems[i].textContent = num
      }
    })
    
  } catch (error) {
    console.log("Erro ao buscar o jogo");
  }
}
getMegaSena();
