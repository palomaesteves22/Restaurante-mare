import { useNavigate } from "react-router-dom";

const imagens = {
  moqueca:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUGqssoO18MYUu0dQlWk72sv0D8QBjfsOYKjtYmWvlYAp_ld8qZMPBr8&s=10",

  peixe:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCoNS06OoXIAxLBjI6iplyyGrj9X0pqJ5a_Lev-Xzt701hpUTjo0i9hOwT&s=10",

  bobo:
    "https://feed.continente.pt/media/kqhn130g/bobo-de-camarao.png?anchor=center&mode=crop&width=826&height=620&rnd=134172837065570000&format=webp",
};

function Home() {
  const navigate = useNavigate();

  return (
    <main>

      {/* HERO */}

      <section className="hero">

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

            <button
              className="primary-button"
              onClick={() => navigate("/cardapio")}
            >
              VER CARDÁPIO
            </button>

            <button
              className="outline-button"
              onClick={() => navigate("/login")}
            >
              FAZER RESERVA
            </button>

          </div>

        </div>

      </section>


      {/* DESTAQUES */}

      <section className="destaques">

        <h2>DESTAQUES</h2>

        <div className="destaques-grid">

          <div
            className="home-card"
            onClick={() => navigate("/detalhes-prato")}
          >

            <img
              src={imagens.moqueca}
              alt="Moqueca de Camarão"
            />

            <div className="home-card-info">

              <strong>
                Moqueca de Camarão
              </strong>

              <span>
                R$ 89,90
              </span>

            </div>

          </div>


          <div
            className="home-card"
            onClick={() => navigate("/detalhes-prato")}
          >

            <img
              src={imagens.peixe}
              alt="Peixe Grelhado"
            />

            <div className="home-card-info">

              <strong>
                Peixe Grelhado
              </strong>

              <span>
                R$ 74,90
              </span>

            </div>

          </div>


          <div
            className="home-card"
            onClick={() => navigate("/detalhes-prato")}
          >

            <img
              src={imagens.bobo}
              alt="Bobó de Camarão"
            />

            <div className="home-card-info">

              <strong>
                Bobó de Camarão
              </strong>

              <span>
                R$ 69,90
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* RODAPÉ */}

      <footer className="footer">

        <span>
          📍 Av. Beira Mar, 1234
          <br />
          Praia do Sol - BA
        </span>

        <span>
          🕐 Terça ao Domingo
          <br />
          11h às 23h
        </span>

        <span>
          ☎ (71) 99999-9999
          <br />
          @marealtarestaurante
        </span>

      </footer>

    </main>
  );
}

export default Home;