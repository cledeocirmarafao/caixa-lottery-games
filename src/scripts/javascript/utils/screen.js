async function renderHome() {
  const htmlElement = document.getElementById("html-profile-home");
  htmlElement.innerHTML = `<section class="hero">
      <h1 class="hero-title">Resultados Loterias Caixa</h1>
      <p class="hero-subtitle">
        Confira aqui os resultados atualizados das principais loterias da Caixa
        Econômica Federal
      </p>

      <ul class="hero-information">
        <li>
          <span class="info-item"
            ><span class="highlight">Sorteios</span>
            <strong>Diários</strong></span
          >
        </li>
        <li>
          <span class="info-item"
            ><span class="highlight">Resultados </i></span>
            <strong>Atualizados</strong></span
          >
        </li>
        <li>
          <span class="info-item"
            ><span class="highlight">Informações</span>
            <strong>Confiáveis</strong></span
          >
        </li>
      </ul>
    </section>

    <section class="cards-container">
      <div class="cards-title">
        <h2>Escolha seu Jogo</h2>
      </div>

      <div class="all-cards">
        <div class="cards mega-sena">
          <div class="card-game">
            <img
              src="./src/assets/images/mega-sena.png"
              alt="icone representativo da mega-sena"
              class="card-image"
            />
            <h3 class="card-name">Mega-Sena</h3>
          </div>
          <p class="card-description">
            Sorteios às quartas e sábados com prêmios milionários
          </p>
          <span class="card-description"
            >Próximo sorteio:
            <strong class="date" id="next-megasena"></strong>
            </span>
          <a href="./megasena.html" class="card-link">Ver Resultados <i class="fa-solid fa-arrow-right"></i></a>
        </div>

        <div class="cards quina">
          <div class="card-game">
            <img
              src="./src/assets/images/quina.png"
              alt="icone representativo da quina"
              class="card-image"
            />
            <h3 class="card-name">Quina</h3>
          </div>
          <p class="card-description">Sorteios todos os dias da semana</p>
          <span class="card-description"
            >Próximo sorteio:
            <strong class="date" id="next-quina"></strong></span
          >
          <a href="./quina.html" class="card-link">Ver Resultados <i class="fa-solid fa-arrow-right"></i></a>
        </div>

        <div class="cards lotofacil">
          <div class="card-game">
            <img
              src="./src/assets/images/lotofacil.png"
              alt="icone representativo da lotofácil"
              class="card-image"
            />
            <h3 class="card-name">Lotofácil</h3>
          </div>
          <p class="card-description">Fácil de jogar e ganhar</p>
          <span class="card-description"
            >Próximo sorteio:
            <strong class="date" id="next-lotofacil"></strong></span
          >
          <a href="./lotofacil.html" class="card-link">Ver Resultados <i class="fa-solid fa-arrow-right"></i></a>
        </div>

        <div class="cards lotomania">
          <div class="card-game">
            <img
              src="./src/assets/images/lotomania.png"
              alt="icone representativo da lotomania"
              class="card-image"
            />
            <h3 class="card-name">Lotomania</h3>
          </div>
          <p class="card-description">50 números sorteados em cada concurso</p>
          <span class="card-description"
            >Próximo sorteio:
            <strong class="date" id="next-lotomania"></strong></span
          >
          <a href="./lotomania.html" class="card-link">Ver Resultados <i class="fa-solid fa-arrow-right"></i></a>
        </div>

        <div class="cards timemania">
          <div class="card-game">
            <img
              src="./src/assets/images/timemania.png"
              alt="icone representativo da timemania"
              class="card-image"
            />
            <h3 class="card-name">Timemania</h3>
          </div>
          <p class="card-description">Aposte no seu time do coração</p>
          <span class="card-description"
            >Próximo sorteio:
            <strong class="date" id="next-timemania"></strong></span
          >
          <a href="./timemania.html" class="card-link">Ver Resultados <i class="fa-solid fa-arrow-right"></i></a>
        </div>

        <div class="cards dupla-sena">
          <div class="card-game">
            <img
              src="./src/assets/images/dupla-sena.png"
              alt="icone representativo da dupla-sena"
              class="card-image"
            />
            <h3 class="card-name">Dupla-Sena</h3>
          </div>
          <p class="card-description">
            Duas chances de ganhar em um único jogo
          </p>
          <span class="card-description"
            >Próximo sorteio:
            <strong class="date" id="next-duplasena"></strong></span
          >
          <a href="./dupla-sena.html" class="card-link">Ver Resultados <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </section>

    <section class="warning">
      <div class="warning-information">
        <h3 class="warning-title">Importante</h3>
        <p class="warning-description">
          Este é um site informativo com resultados das loterias da Caixa. Para
          realizar apostas oficiais, acesse
          <a href="https://www.loterias.caixa.gov.br/" target="_blank"
            >loterias.caixa.gov.br</a
          >.
        </p>
      </div>
    </section>`;
}

function renderDupla() {
  const htmlDuplasena = document.getElementById("html-profile-duplasena");
  htmlDuplasena.innerHTML = `<section class="contest">
        <img src="./src/assets/images/dupla-sena.png" alt="" class="image" />

        <h1 class="title">Dupla-Sena</h1>

        <p class="text">Duas chances de ganhar no mesmo concurso</p>
      </section>

      <section class="contest-result dupla">
        <div class="contest-setting">
          <div class="contest-info">
            <h3 class="prize-draw">
              Concurso <span id="duplasena-contest-number"></span>
            </h3>
            <span class="calendary">
              <i class="fa-regular fa-calendar"></i>
              <time datetime="" id="duplasena-date"></time>
            </span>
          </div>
          <div>
            <button class="refresh">
              <i class="fa-solid fa-arrows-rotate"></i> Atualizar
            </button>
          </div>
        </div>

        <div class="result-numbers">
          <h4 class="draw-numbers">1° Sorteio</h4>

          <ul id="first-list-draw">
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
          </ul>
        </div>
        <div class="result-numbers">
          <h4 class="draw-numbers">2° Sorteio</h4>

          <ul id="second-list-draw">
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
          </ul>
        </div>

        <div class="winner-prize dupla">
          <div class="winners">
            <span class="decoration"> Ganhadores (6 acertos) </span>
            <h4 class="result" id="duplasena-result"></h4>
          </div>

          <div class="prize">
            <span class="decoration">Prêmio Acumulado</span>
            <h4 class="prize-amount" id="duplasena-prize"></h4>
          </div>
        </div>
      </section>

      <section class="previous-draws dupla">
        <h3 class="previous-draw-title">Sorteios Anteriores</h3>

        <ol>
          <li class="previous-draw-result duplasena-previous-result">
            <div class="previous">
              <h4 class="previous--draw">
                Concurso <span class="previous__draw"></span>
              </h4>
              <span class="calendary">
                <i class="fa-regular fa-calendar"></i>
                <time datetime="" class="date-time">24/10/2025</time>
              </span>
            </div>
            <div class="draw-numbers">
              <h4 class="draw-title">1° Sorteio</h4>
              <ul class="row">
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
              </ul>

              <h4 class="draw-title">2° Sorteio</h4>
              <ul class="row">
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
              </ul>
            </div>
          </li>

          <li class="previous-draw-result duplasena-previous-result">
            <div class="previous">
              <h4 class="previous--draw">
                Concurso <span class="previous__draw"></span>
              </h4>
              <span class="calendary">
                <i class="fa-regular fa-calendar"></i>
                <time datetime="" class="date-time">23/10/2025</time>
              </span>
            </div>
            <div class="draw-numbers">
              <h4 class="draw-title">1° Sorteio</h4>
              <ul class="row">
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
              </ul>

              <h4 class="draw-title">2° Sorteio</h4>
              <ul class="row">
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
              </ul>
            </div>
          </li>

          <li class="previous-draw-result duplasena-previous-result">
            <div class="previous">
              <h4 class="previous--draw">
                Concurso <span class="previous__draw"></span>
              </h4>
              <span class="calendary">
                <i class="fa-regular fa-calendar"></i>
                <time datetime="" class="date-time">22/10/2025</time>
              </span>
            </div>
            <div class="draw-numbers">
              <h4 class="draw-title">1° Sorteio</h4>
              <ul class="row">
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
              </ul>

              <h4 class="draw-title">2° Sorteio</h4>
              <ul class="row">
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
              </ul>
            </div>
          </li>
        </ol>
      </section>

      <section class="how-to-bet">
        <h3 class="title-bet">Como Apostar</h3>
        <p class="bet-paragraph">
          A Dupla Sena é única: com apenas um bilhete você concorre duas vezes!
          São dois sorteios por concurso e ganha quem acertar 3, 4, 5 ou 6
          números no primeiro e/ou segundo sorteios.
        </p>
        <p class="bet-paragraph">
          Você escolhe de 6 a 15 números dentre os 50 disponíveis no volante.
          Com a Surpresinha, o sistema escolhe os números para você.
        </p>
        <span class="draw-day"
          ><strong>Sorteios: de Segunda a Sábado às 20h</strong></span
        >
      </section>`;
}

function renderMegasena() {
  const htmlMegasena = document.getElementById("html-profile-megasena");
  htmlMegasena.innerHTML = ` <section class="contest">
        <img src="./src/assets/images/mega-sena.png" alt="" class="image" />

        <h1 class="title">Mega-Sena</h1>

        <p class="text">
          Confira os números sorteados e concorra a prêmios milionários
        </p>
      </section>

      <section class="contest-result">
        <div class="contest-setting">
          <div class="contest-info">
            <h3 class="prize-draw">
              Concurso <span id="megasena-contest-number"></span>
            </h3>
            <span class="calendary">
              <i class="fa-regular fa-calendar"></i>
              <time datetime="" id="megasena-date"></time>
            </span>
          </div>
          <div>
            <button class="refresh">
              <i class="fa-solid fa-arrows-rotate"></i> Atualizar
            </button>
          </div>
        </div>

        <div class="result-numbers">
          <h4 class="draw-numbers">Números Sorteados</h4>

          <ul id="megasena-numbers-list">
            <li class="numbers" data-role="number"></li>
            <li class="numbers" data-role="number"></li>
            <li class="numbers" data-role="number"></li>
            <li class="numbers" data-role="number"></li>
            <li class="numbers" data-role="number"></li>
            <li class="numbers" data-role="number"></li>
          </ul>
        </div>

        <div class="winner-prize">
          <div class="winners">
            <span class="decoration"> Ganhadores (6 acertos) </span>
            <h4 class="result" id="megasena-result"></h4>
          </div>

          <div class="prize">
            <span class="decoration">Prêmio Acumulado</span>
            <h4 class="prize-amount" id="megasena-prize"></h4>
          </div>
        </div>
      </section>

      <section class="previous-draws">
        <h3 class="previous-draw-title">Sorteios Anteriores</h3>

        <ol>
          <li class="previous-draw-result megasena-previous-result">
            <div class="previous">
              <h4 class="previous--draw">
                Concurso <span class="previous__draw"></span>
              </h4>
              <span class="calendary">
                <i class="fa-regular fa-calendar"></i>
                <time class="date-time"></time>
              </span>
            </div>
            <div class="draw-numbers">
              <ul class="row">
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
              </ul>
            </div>
          </li>

          <li class="previous-draw-result megasena-previous-result">
            <div class="previous">
              <h4 class="previous--draw">
                Concurso <span class="previous__draw"></span>
              </h4>
              <span class="calendary">
                <i class="fa-regular fa-calendar"></i>
                <time class="date-time"></time>
              </span>
            </div>
            <div class="draw-numbers">
              <ul class="row">
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
              </ul>
            </div>
          </li>
          <li class="previous-draw-result megasena-previous-result">
            <div class="previous">
              <h4 class="previous--draw">
                Concurso <span class="previous__draw"></span>
              </h4>
              <span class="calendary">
                <i class="fa-regular fa-calendar"></i>
                <time class="date-time"></time>
              </span>
            </div>
            <div class="draw-numbers">
              <ul class="row">
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
              </ul>
            </div>
          </li>
        </ol>
      </section>

      <section class="how-to-bet">
        <h3 class="title-bet">Como Apostar</h3>
        <p class="bet-paragraph">
          A Mega-Sena paga milhões para o acertador dos 6 números sorteados.
          Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60
          disponíveis no volante de apostas.
        </p>
        <p class="bet-paragraph">
          Para realizar o sonho de ser o próximo milionário, você deve marcar de
          6 a 15 números do volante, podendo deixar que o sistema escolha os
          números por meio da Surpresinha.
        </p>
        <span class="draw-day"
          ><strong>Sorteios: Terças, Quintas e Sábados às 20h</strong></span
        >
      </section>`;
}

function renderQuina() {
  const htmlQuina = document.getElementById("html-profile-quina");
  htmlQuina.innerHTML = `<section class="contest">
        <img src="./src/assets/images/quina.png" alt="" class="image" />

        <h1 class="title">Quina</h1>

        <p class="text">Sorteios diários com prêmios incríveis</p>
      </section>

      <section class="contest-result quina">
        <div class="contest-setting">
          <div class="contest-info">
            <h3 class="prize-draw">
              Concurso <span id="quina-contest-number"></span>
            </h3>
            <span class="calendary">
              <i class="fa-regular fa-calendar"></i>
              <time datetime="" id="quina-date"></time>
            </span>
          </div>
          <div>
            <button class="refresh">
              <i class="fa-solid fa-arrows-rotate"></i> Atualizar
            </button>
          </div>
        </div>

        <div class="result-numbers">
          <h4 class="draw-numbers">Números Sorteados</h4>

          <ul id="quina-numbers-list">
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
          </ul>
        </div>

        <div class="winner-prize quina">
          <div class="winners">
            <span class="decoration"> Ganhadores (6 acertos) </span>
            <h4 class="result" id="quina-result"></h4>
          </div>

          <div class="prize">
            <span class="decoration">Prêmio Acumulado</span>
            <h4 class="prize-amount" id="quina-prize"></h4>
          </div>
        </div>
      </section>

      <section class="previous-draws quina">
        <h3 class="previous-draw-title">Sorteios Anteriores</h3>

        <ol>
          <li class="previous-draw-result quina-previous-result">
            <div class="previous">
              <h4 class="previous--draw">
                Concurso <span class="previous__draw"></span>
              </h4>
              <span class="calendary">
                <i class="fa-regular fa-calendar"></i>
                <time datetime="" class="date-time"></time>
              </span>
            </div>
            <div class="draw-numbers">
              <ul class="row">
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
              </ul>
            </div>
          </li>

          <li class="previous-draw-result quina-previous-result">
            <div class="previous">
              <h4 class="previous--draw">
                Concurso <span class="previous__draw"></span>
              </h4>
              <span class="calendary">
                <i class="fa-regular fa-calendar"></i>
                <time datetime="" class="date-time"></time>
              </span>
            </div>
            <div class="draw-numbers">
              <ul class="row">
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
              </ul>
            </div>
          </li>

          <li class="previous-draw-result quina-previous-result">
            <div class="previous">
              <h4 class="previous--draw">
                Concurso <span class="previous__draw"></span>
              </h4>
              <span class="calendary">
                <i class="fa-regular fa-calendar"></i>
                <time datetime="" class="date-time"></time>
              </span>
            </div>
            <div class="draw-numbers">
              <ul class="row">
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
              </ul>
            </div>
          </li>
        </ol>
      </section>

      <section class="how-to-bet">
        <h3 class="title-bet">Como Apostar</h3>
        <p class="bet-paragraph">
          A Quina tem sorteios todos os dias da semana, sempre às 20h. Para
          apostar, você escolhe de 5 a 15 números dentre os 80 disponíveis no
          volante.
        </p>
        <p class="bet-paragraph">
          Ganha quem acertar 2, 3, 4 ou 5 números. Quanto mais números você
          escolher, maior a chance de ganhar e maior o valor da aposta.
        </p>
        <span class="draw-day"
          ><strong>Sorteios: Todos os dias às 20h</strong></span
        >
      </section>`;
}

function renderLotofacil() {
  const htmlLotofacil = document.getElementById("html-profile-lotofacil");
  htmlLotofacil.innerHTML = `<section class="contest">
        <img src="./src/assets/images/lotofacil.png" alt="" class="image" />

        <h1 class="title">Lotofácil</h1>

        <p class="text">Fácil de ganhar, difícil de esquecer</p>
      </section>

      <section class="contest-result">
        <div class="contest-setting">
          <div class="contest-info">
            <h3 class="prize-draw">
              Concurso <span id="lotofacil-contest-number"></span>
            </h3>
            <span class="calendary">
              <i class="fa-regular fa-calendar"></i>
              <time datetime="" id="lotofacil-date"></time>
            </span>
          </div>
          <div>
            <button class="refresh">
              <i class="fa-solid fa-arrows-rotate"></i> Atualizar
            </button>
          </div>
        </div>

        <div class="result-numbers lotofacil">
          <h4 class="draw-numbers">Números Sorteados</h4>

          <ul id="lotofacil-numbers-list">
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
          </ul>
        </div>

        <div class="winner-prize lotofacil">
          <div class="winners">
            <span class="decoration"> Ganhadores (6 acertos) </span>
            <h4 class="result" id="lotofacil-result"></h4>
          </div>

          <div class="prize">
            <span class="decoration">Prêmio Acumulado</span>
            <h4 class="prize-amount" id="lotofacil-prize"></h4>
          </div>
        </div>
      </section>

      <section class="previous-draws lotofacil">
        <h3 class="previous-draw-title">Sorteios Anteriores</h3>

        <ol>
          <li class="previous-draw-result lotofacil-previous-result">
            <div class="previous">
              <h4 class="previous--draw">
                Concurso <span class="previous__draw"></span>
              </h4>
              <span class="calendary">
                <i class="fa-regular fa-calendar"></i>
                <time class="date-time"></time>
              </span>
            </div>
            <div class="draw-numbers">
              <ul class="row">
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
              </ul>
            </div>
          </li>

          <li class="previous-draw-result lotofacil-previous-result">
            <div class="previous">
              <h4 class="previous--draw">
                Concurso <span class="previous__draw"></span>
              </h4>
              <span class="calendary">
                <i class="fa-regular fa-calendar"></i>
                <time class="date-time"></time>
              </span>
            </div>
            <div class="draw-numbers">
              <ul class="row">
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
              </ul>
            </div>
          </li>
          <li class="previous-draw-result lotofacil-previous-result">
            <div class="previous">
              <h4 class="previous--draw">
                Concurso <span class="previous__draw"></span>
              </h4>
              <span class="calendary">
                <i class="fa-regular fa-calendar"></i>
                <time class="date-time"></time>
              </span>
            </div>
            <div class="draw-numbers">
              <ul class="row">
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
              </ul>
            </div>
          </li>
        </ol>
      </section>

      <section class="how-to-bet">
        <h3 class="title-bet">Como Apostar</h3>
        <p class="bet-paragraph">
          A Lotofácil, como o nome já diz, é muito fácil de apostar e ganhar.
          Você marca entre 15 e 20 números, dentre os 25 disponíveis no volante.
        </p>
        <p class="bet-paragraph">
          Ganha prêmios quem acerta 11, 12, 13, 14 ou 15 números. A loteria que
          mais paga prêmios no Brasil!
        </p>
        <span class="draw-day"
          ><strong>Sorteios: de Segunda a Sábado às 20h</strong></span
        >
      </section>`;
}

function renderLotomania() {
  const htmlLotomania = document.getElementById("html-profile-lotomania");
  htmlLotomania.innerHTML = `<section class="contest">
        <img src="./src/assets/images/lotomania.png" alt="" class="image" />

        <h1 class="title">Lotomania</h1>

        <p class="text">50 números sorteados e muitas chances de ganhar</p>
      </section>

      <section class="contest-result">
        <div class="contest-setting">
          <div class="contest-info">
            <h3 class="prize-draw">
              Concurso <span id="lotomania-contest-number"></span>
            </h3>
            <span class="calendary">
              <i class="fa-regular fa-calendar"></i>
              <time datetime="" id="lotomania-date"></time>
            </span>
          </div>
          <div>
            <button class="refresh">
              <i class="fa-solid fa-arrows-rotate"></i> Atualizar
            </button>
          </div>
        </div>

        <div class="result-numbers lotomania">
          <h4 class="draw-numbers">Números Sorteados</h4>

          <ul id="lotomania-numbers-list">
            <li class="numbers numbers-result"></li>
            <li class="numbers numbers-result"></li>
            <li class="numbers numbers-result"></li>
            <li class="numbers numbers-result"></li>
            <li class="numbers numbers-result"></li>
            <li class="numbers numbers-result"></li>
            <li class="numbers numbers-result"></li>
            <li class="numbers numbers-result"></li>
            <li class="numbers numbers-result"></li>
            <li class="numbers numbers-result"></li>
            <li class="numbers numbers-result"></li>
            <li class="numbers numbers-result"></li>
            <li class="numbers numbers-result"></li>
            <li class="numbers numbers-result"></li>
            <li class="numbers numbers-result"></li>
            <li class="numbers numbers-result"></li>
            <li class="numbers numbers-result"></li>
            <li class="numbers numbers-result"></li>
            <li class="numbers numbers-result"></li>
            <li class="numbers numbers-result"></li>
          </ul>
        </div>

        <div class="winner-prize lotomania">
          <div class="winners">
            <span class="decoration"> Ganhadores (6 acertos) </span>
            <h4 class="result" id="lotomania-result"></h4>
          </div>

          <div class="prize">
            <span class="decoration">Prêmio Acumulado</span>
            <h4 class="prize-amount" id="lotomania-prize"></h4>
          </div>
        </div>
      </section>

      <section class="previous-draws lotomania">
        <h3 class="previous-draw-title">Sorteios Anteriores</h3>

        <ol>
          <li class="previous-draw-result lotomania-previous-result">
            <div class="previous">
              <h4 class="previous--draw">
                Concurso <span class="previous__draw"></span>
              </h4>
              <span class="calendary">
                <i class="fa-regular fa-calendar"></i>
                <time class="date-time"></time>
              </span>
            </div>
            <div class="draw-numbers">
              <ul class="row">
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
              </ul>
            </div>
          </li>

          <li class="previous-draw-result lotomania-previous-result">
            <div class="previous">
              <h4 class="previous--draw">
                Concurso <span class="previous__draw"></span>
              </h4>
              <span class="calendary">
                <i class="fa-regular fa-calendar"></i>
                <time class="date-time"></time>
              </span>
            </div>
            <div class="draw-numbers">
              <ul class="row">
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
              </ul>
            </div>
          </li>
          <li class="previous-draw-result lotomania-previous-result">
            <div class="previous">
              <h4 class="previous--draw">
                Concurso <span class="previous__draw"></span>
              </h4>
              <span class="calendary">
                <i class="fa-regular fa-calendar"></i>
                <time class="date-time"></time>
              </span>
            </div>
            <div class="draw-numbers">
              <ul class="row">
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
              </ul>
            </div>
          </li>
        </ol>
      </section>

      <section class="how-to-bet">
        <h3 class="title-bet">Como Apostar</h3>
        <p class="bet-paragraph">
          A Mega-Sena paga milhões para o acertador dos 6 números sorteados.
          Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60
          disponíveis no volante de apostas.
        </p>
        <p class="bet-paragraph">
          Para realizar o sonho de ser o próximo milionário, você deve marcar de
          6 a 15 números do volante, podendo deixar que o sistema escolha os
          números por meio da Surpresinha.
        </p>
        <span class="draw-day"
          ><strong>Sorteios: Terças, Quintas e Sábados às 20h</strong></span
        >
      </section>`;
}

function renderTimemania() {
  const htmlTimemania = document.getElementById("html-profile-timemania");
  htmlTimemania.innerHTML = `<section class="contest">
        <img src="./src/assets/images/timemania.png" alt="" class="image" />

        <h1 class="title">Timemania</h1>

        <p class="text">
         Concorra a prêmios e ainda ajude seu time do coração
        </p>
      </section>

      <section class="contest-result timemania">
        <div class="contest-setting">
          <div class="contest-info">
            <h3 class="prize-draw">Concurso <span id="timemania-contest-number"></span></h3>
            <span class="calendary">
              <i class="fa-regular fa-calendar"></i>
              <time id="timemania-date"></time>
            </span>
          </div>
          <div>
            <button class="refresh">
              <i class="fa-solid fa-arrows-rotate"></i> Atualizar
            </button>
          </div>
        </div>

        <div class="result-numbers">
          <h4 class="draw-numbers">Números Sorteados</h4>

          <ul id="timemania-numbers-list">
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
            <li class="numbers"></li>
          </ul>
          <h4 class="draw-team">
            Time Sorteado
          </h4>
          <div class="team">
            <span class="team-draw" id="team-draw">
            </span>
          </div>
        </div>

        <div class="winner-prize">
          <div class="winners">
            <span class="decoration"> Ganhadores (6 acertos) </span>
            <h4 class="result" id="timemania-result"></h4>
          </div>

          <div class="prize">
            <span class="decoration">Prêmio Acumulado</span>
            <h4 class="prize-amount" id="timemania-prize"></h4>
          </div>
        </div>
      </section>

      <section class="previous-draws timemania">
        <h3 class="previous-draw-title">Sorteios Anteriores</h3>

        <ol>
          <li class="previous-draw-result timemania-previous-result">
            <div class="previous">
              <h4 class="previous--draw">Concurso <span class="previous__draw"></span></h4>
              <span class="calendary">
                <i class="fa-regular fa-calendar"></i>
                <time class="date-time"></time>
              </span>
              <span class="calendary">
                <i class="fa-solid fa-trophy"></i> <span class="previous-draw-team"></span>
              </span>
            </div>
            </div>
            <div class="draw-numbers">
              <ul class="row">
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
              </ul>
            </div>
          </li>

          <li class="previous-draw-result timemania-previous-result">
            <div class="previous">
              <h4 class="previous--draw">Concurso <span class="previous__draw"></span></h4>
              <span class="calendary">
                <i class="fa-regular fa-calendar"></i>
                <time class="date-time"></time>
              </span>
              <span class="calendary">
                <i class="fa-solid fa-trophy"></i> <span class="previous-draw-team"></span>
              </span>
            </div>
            <div class="draw-numbers">
              <ul class="row">
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
              </ul>
            </div>
          </li>
          <li class="previous-draw-result timemania-previous-result">
            <div class="previous">
              <h4 class="previous--draw">Concurso <span class="previous__draw"></span></h4>
              <span class="calendary">
                <i class="fa-regular fa-calendar"></i>
                <time class="date-time"></time>
              </span>
              <span class="calendary">
                <i class="fa-solid fa-trophy"></i> <span class="previous-draw-team"></span>
              </span>
            </div>
            </div>
            <div class="draw-numbers">
              <ul class="row">
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
                <li class="numbers numbers-result"></li>
              </ul>
            </div>
          </li>
        </ol>
      </section>

      <section class="how-to-bet">
        <h3 class="title-bet">Como Apostar</h3>
        <p class="bet-paragraph">
          A Timemania é a loteria para você que é apaixonado por futebol! Escolha 10 números dentre os 80 disponíveis e um Time do Coração entre os 80 participantes.
        </p>
        <p class="bet-paragraph">
          São sorteados 7 números e um Time do Coração por concurso. Você ganha ao acertar 3, 4, 5, 6 ou 7 números, ou acertando o Time do Coração. Parte da arrecadação é destinada aos clubes de futebol.
        </p>
        <span class="draw-day"><strong>Sorteios: Terças, Quintas e Sábados às 20h</strong></span>
      </section>`;
}

function renderContact() {
  const htmlContact = document.getElementById("html-profile-contact");
  htmlContact.innerHTML = `<h1 class="title-contact">Entre em Contato</h1>
      <span class="text-contact">
        Tem dúvidas ou sugestões? Estamos aqui para ajudar!
      </span>

      <section class="contact-support">
        <div>
          <form action="get" id="form" class="form">
            <div class="form-description">
              <h2 class="title-form">Envie sua Mensagem</h2>
              <p class="text-form">
                Preencha o formulário abaixo e responderemos o mais breve
                possível
              </p>
            </div>
            <div class="send-mensage">
              <div class="grouping">
                <span class="span-form">Nome</span>
                <input type="text" placeholder="Seu nome completo"/
                class="form-highlight">
              </div>

              <div class="grouping">
                <span class="span-form"> E-mail </span>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Digite seu e-mail"
                  class="form-highlight"
                />
              </div>

              <div class="grouping">
                <span class="span-form"> Telefone </span>
                <input
                  type="tel"
                  name=""
                  id=""
                  placeholder="(00) 00000-0000"
                  class="form-highlight"
                />
              </div>

              <div class="grouping">
                <span class="span-form">Mensagem</span>
                <textarea
                  name=""
                  id=""
                  placeholder="Escreva sua mensagem"
                  class="form-highlight textarea"
                >
                </textarea>
              </div>
            </div>
            <button type="submit" class="btn">
              <i class="fa-solid fa-paper-plane"></i>
              <span>Enviar Mensagem</span>
            </button>
          </form>
        </div>

        <section class="contact-information">
          <div class="contact-address">
            <h2 class="address">informações de Contato</h2>

            <div class="contact">
              <i class="fa-solid fa-envelope"></i>
              <div class="address-content">
                <span class="contact-highlight">E-mail</span>
                <span class="highlight-contact"
                  >contato@loteriascaixa.com.br</span
                >
              </div>
            </div>

            <div class="contact">
              <i class="fa-solid fa-phone"></i>
              <div class="address-content">
                <span class="contact-highlight">Telefone</span>
                <span class="highlight-contact">(11) 3004-1105</span>
              </div>
            </div>

            <div class="contact">
              <i class="fa-solid fa-location-dot"></i>
              <div class="address-content">
                <span class="contact-highlight">Av. Paulista, 1234</span>
                <span class="highlight-contact"
                  >São Paulo, SP - CEP 01310-100</span
                >
              </div>
            </div>
          </div>

          <div class="opening-hours">
            <h2 class="address">Horário de Atendimento</h2>
            <div class="days-opening">
              <span class="days">
                <strong>Segunda a Sexta:</strong
                ><span class="highlight"> 9h às 18h</span>
              </span>
              <span class="days">
                <strong>Sábado:</strong
                ><span class="highlight"> 9h às 13h</span>
              </span>
              <span class="days">
                <strong>Domingo:</strong> <span class="highlight">Fechado</span>
              </span>
            </div>
          </div>

          <div class="alert">
            <p>
              <strong>Aviso:</strong
              ><span class="alert-text">
                Este é um site informativo. Para questões oficiais sobre apostas
                e prêmios, entre em contato diretamente com a Caixa Econômica
                Federal através do site oficial</span
              >
              <a
                href="https://loterias.caixa.gov.br/Paginas/default.aspx"
                target="_blank"
                >loterias.caixa.gov.br</a
              >
            </p>
          </div>
        </section>
      </section>`;
}

export {
  renderHome,
  renderDupla,
  renderMegasena,
  renderQuina,
  renderLotofacil,
  renderLotomania,
  renderTimemania,
  renderContact,
};
