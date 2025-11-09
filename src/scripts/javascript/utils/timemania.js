const BASE_API = "https://loteriascaixa-api.herokuapp.com/api";

async function getTimemania() {
  const response = await fetch(`${BASE_API}/timemania`);
  const data = await response.json();

  let teamFilter = {
    team: data[0].timeCoracao,
  };

  document.getElementById("team-draw").textContent = teamFilter.team;

  const results = document.querySelectorAll(".previous-draw-team");

  results.forEach((block, i) => {
    if (block) {
      block.textContent = data[i].timeCoracao;
    }
  });
}
getTimemania();
