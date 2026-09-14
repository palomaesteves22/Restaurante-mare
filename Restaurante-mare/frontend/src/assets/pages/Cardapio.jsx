import { useNavigate } from "react-router-dom";

const imagens = {
  moqueca:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUGqssoO18MYUu0dQlWk72sv0D8QBjfsOYKjtYmWvlYAp_ld8qZMPBr8&s=10",

  peixe:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCoNS06OoXIAxLBjI6iplyyGrj9X0pqJ5a_Lev-Xzt701hpUTjo0i9hOwT&s=10",

  bobo:
    "https://feed.continente.pt/media/kqhn130g/bobo-de-camarao.png?anchor=center&mode=crop&width=826&height=620&rnd=134172837065570000&format=webp",
};

function Cardapio() {
  const navigate = useNavigate();

  const pratos = [
    {
      nome: "Ceviche de Peixe",
      preco: "48,90",
      imagem: imagens.peixe,
      descricao: "Peixe branco marinado no limão com cebola roxa, coentro e pimenta."
    },
    {
      nome: "Casquinha de Siri",
      preco: "36,90",
      imagem: imagens.bobo,
      descricao: "Deliciosa casquinha recheada com creme de siri gratinado."
    },
    {
      nome: "Bolinho de Bacalhau",
      preco: "32,90",
      imagem: imagens.bobo,
      descricao: "Bolinho de bacalhau tradicional da casa."
    },
    {
      nome: "Camarão Empanado",
      preco: "42,90",
      imagem: imagens.moqueca,
      descricao: "Camarões empanados com molho especial da casa."
    }
  ];

  return (
    <main className="cardapio-page">

      <div className="cardapio-title">

        <h1>
          Nosso Cardápio
        </h1>

        <div className="title-wave">
          〰
        </div>

      </div>


      <div className="categories">

        <button className="active">
          ENTRADAS
        </button>

        <button>
          PRATOS PRINCIPAIS
        </button>

        <button>
          SOBREMESAS
        </button>

        <button>
          BEBIDAS
        </button>

      </div>


      <div className="menu-list">

        {pratos.map((prato, index) => (

          <div
            className="menu-item"
            key={index}
          >

            <img
              src={prato.imagem}
              alt={prato.nome}
            />

            <div className="menu-description">

              <h3>
                {prato.nome}
              </h3>

              <p>
                {prato.descricao}
              </p>

            </div>

            <strong className="menu-price">
              R$ {prato.preco}
            </strong>

            <button
              className="details-button"
              onClick={() => navigate("/detalhes-prato")}
            >
              VER DETALHES
            </button>

          </div>

        ))}

      </div>

    </main>
  );
}

export default Cardapio;