import { useNavigate } from "react-router-dom";

const imagens = {
  moqueca:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUGqssoO18MYUu0dQlWk72sv0D8QBjfsOYKjtYmWvlYAp_ld8qZMPBr8&s=10",

  peixe:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCoNS06OoXIAxLBjI6iplyyGrj9X0pqJ5a_Lev-Xzt701hpUTjo0i9hOwT&s=10",

  bobo:
    "https://feed.continente.pt/media/kqhn130g/bobo-de-camarao.png?anchor=center&mode=crop&width=826&height=620&rnd=134172837065570000&format=webp",
};

function DetalhesPrato() {
  const navigate = useNavigate();

  return (
    <main className="details-page">

      <button
        className="back-button"
        onClick={() => navigate("/cardapio")}
      >
        ← VOLTAR PARA O CARDÁPIO
      </button>


      <div className="details-content">

        <div className="details-image">

          <img
            src={imagens.moqueca}
            alt="Moqueca de Camarão"
          />

        </div>


        <div className="details-info">

          <h1>
            Moqueca de Camarão
          </h1>

          <h2>
            R$ 89,90
          </h2>

          <p>
            Deliciosa moqueca feita com camarões
            frescos, leite de coco, azeite de dendê,
            pimentões, cebola e temperos especiais.
          </p>


          <h3>
            Ingredientes
          </h3>

          <p>
            Camarão, leite de coco, azeite de dendê,
            pimentão, cebola, alho, coentro, sal e pimenta.
          </p>


          <h3>
            Serve
          </h3>

          <p>
            2 pessoas
          </p>


          <div className="quantity">

            <span>
              Quantidade
            </span>

            <div>
              <button>−</button>
              <strong>1</strong>
              <button>+</button>
            </div>

          </div>


          <button
            className="primary-button"
            onClick={() => navigate("/cardapio")}
          >
            ADICIONAR AO CARRINHO
          </button>

        </div>

      </div>


      <h2 className="also-title">
        Você também pode gostar
      </h2>


      <div className="recommendations">

        <div>
          <img
            src={imagens.bobo}
            alt="Bobó de Camarão"
          />

          <strong>
            Bobó de Camarão
          </strong>

          <span>
            R$ 69,90
          </span>
        </div>


        <div>
          <img
            src={imagens.peixe}
            alt="Peixe Grelhado"
          />

          <strong>
            Peixe Grelhado
          </strong>

          <span>
            R$ 74,90
          </span>
        </div>


        <div>
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

      </div>

    </main>
  );
}

export default DetalhesPrato;