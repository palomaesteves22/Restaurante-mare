import { useNavigate } from "react-router-dom";

const imagens = {
  moqueca:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUGqssoO18MYUu0dQlWk72sv0D8QBjfsOYKjtYmWvlYAp_ld8qZMPBr8&s=10",

  peixe:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCoNS06OoXIAxLBjI6iplyyGrj9X0pqJ5a_Lev-Xzt701hpUTjo0i9hOwT&s=10",

  bobo:
    "https://feed.continente.pt/media/kqhn130g/bobo-de-camarao.png?anchor=center&mode=crop&width=826&height=620&rnd=134172837065570000&format=webp",
};

function Dashboard() {
  const navigate = useNavigate();

  return (
    <section className="dashboard-page">

      <div className="dashboard-top">

        <div>
          <h1>
            Olá, Mariana! 👋
          </h1>

          <p>
            Seja bem-vinda de volta.
          </p>
        </div>

        <div className="profile">
          🔔
          <span>👩🏻</span>
        </div>

      </div>


      <div className="dashboard-cards">

        <div className="summary-card">

          <h3>Resumo de reservas</h3>

          <div className="numbers">

            <div>
              <strong>3</strong>
              <span>Próximas</span>
            </div>

            <div>
              <strong>7</strong>
              <span>Realizadas</span>
            </div>

            <div>
              <strong>1</strong>
              <span>Canceladas</span>
            </div>

          </div>

        </div>


        <div className="summary-card">

          <h3>Próxima reserva</h3>

          <p>
            📅 Sábado, 24 de Maio
          </p>

          <p>
            19:30 - 2 pessoas
          </p>

          <button className="primary-button">
            VER RESERVA
          </button>

        </div>

      </div>


      <div className="dashboard-title">

        <h2>
          Pratos em destaque
        </h2>

      </div>


      <div className="dashboard-dishes">

        <div className="dashboard-dish">

          <img
            src={imagens.moqueca}
            alt="Camarão no Coco"
          />

          <strong>
            Camarão no Coco
          </strong>

          <span>
            R$ 86,90
          </span>

        </div>


        <div className="dashboard-dish">

          <img
            src={imagens.peixe}
            alt="Lagosta Grelhada"
          />

          <strong>
            Lagosta Grelhada
          </strong>

          <span>
            R$ 129,90
          </span>

        </div>


        <div className="dashboard-dish">

          <img
            src={imagens.bobo}
            alt="Torta de Limão"
          />

          <strong>
            Torta de Limão
          </strong>

          <span>
            R$ 24,90
          </span>

        </div>

      </div>


      <button
        className="primary-button dashboard-menu-button"
        onClick={() => navigate("/cardapio")}
      >
        VER CARDÁPIO COMPLETO →
      </button>

    </section>
  );
}

export default Dashboard;