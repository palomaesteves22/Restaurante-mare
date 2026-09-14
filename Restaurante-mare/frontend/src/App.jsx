import "./App.css";

function App() {
  return (
    <div className="app">

      {/* ================= HEADER ================= */}
      <header className="header">
        <div className="logo">
          <span className="logo-wave">〰</span>

          <div>
            <h2>MARÉ ALTA</h2>
            <small>RESTAURANTE</small>
          </div>
        </div>

        <nav>
          <a href="#inicio">INÍCIO</a>
          <a href="#cardapio">CARDÁPIO</a>
          <a href="#sobre">SOBRE</a>
          <a href="#contato">CONTATO</a>
        </nav>

        <button className="btn-reserva">
          FAZER RESERVA
        </button>
      </header>


      {/* ================= HERO ================= */}
      <section className="hero" id="inicio">

        <div className="hero-content">

          <h1>
            Sabores incríveis
            <br />
            à beira-mar
          </h1>

          <p>
            Viva momentos únicos com uma
            <br />
            vista paradisíaca e pratos
            <br />
            preparados com o melhor do mar.
          </p>

          <div className="hero-buttons">
            <button className="btn-principal">
              VER CARDÁPIO
            </button>

            <button className="btn-secundario">
              FAZER RESERVA
            </button>
          </div>

        </div>

      </section>


      {/* ================= DESTAQUES ================= */}
      <section className="destaques" id="cardapio">

        <h2>DESTAQUES</h2>

        <div className="pratos">

          <div className="prato-card">
            <div className="prato-imagem">
              🍤
            </div>

            <h3>Moqueca de Camarão</h3>
            <p>R$ 89,90</p>
          </div>


          <div className="prato-card">
            <div className="prato-imagem">
              🐟
            </div>

            <h3>Peixe Grelhado</h3>
            <p>R$ 74,90</p>
          </div>


          <div className="prato-card">
            <div className="prato-imagem">
              🍲
            </div>

            <h3>Bobó de Camarão</h3>
            <p>R$ 69,90</p>
          </div>

        </div>

      </section>


      {/* ================= RODAPÉ ================= */}
      <footer className="footer" id="contato">

        <div>
          📍 Av. Beira Mar, 1234
          <br />
          Praia do Sol - BA
        </div>

        <div>
          🕐 Terça a Domingo
          <br />
          11h às 23h
        </div>

        <div>
          ☎ (71) 99999-9999
          <br />
          @marealtarestaurante
        </div>

      </footer>

    </div>
  );
}

export default App;