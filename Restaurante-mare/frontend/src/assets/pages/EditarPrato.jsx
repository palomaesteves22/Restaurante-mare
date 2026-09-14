import { useNavigate } from "react-router-dom";

const imagem =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUGqssoO18MYUu0dQlWk72sv0D8QBjfsOYKjtYmWvlYAp_ld8qZMPBr8&s=10";

function EditarPrato() {
  const navigate = useNavigate();

  return (
    <section className="admin-form-page">

      <h1>
        Editar Prato
      </h1>


      <label>
        Nome do prato
      </label>

      <input
        type="text"
        defaultValue="Moqueca de Camarão"
      />


      <label>
        Descrição
      </label>

      <textarea
        defaultValue="Deliciosa moqueca feita com camarões frescos, leite de coco, azeite de dendê, pimentões, cebola e temperos especiais."
      />


      <div className="form-row">

        <div>

          <label>
            Preço (R$)
          </label>

          <input
            type="number"
            defaultValue="89.90"
          />

        </div>


        <div>

          <label>
            Categoria
          </label>

          <select defaultValue="Pratos Principais">

            <option>
              Entradas
            </option>

            <option>
              Pratos Principais
            </option>

            <option>
              Sobremesas
            </option>

            <option>
              Bebidas
            </option>

          </select>

        </div>

      </div>


      <label>
        Ingredientes
      </label>

      <textarea
        defaultValue="Camarão, leite de coco, azeite de dendê, pimentão, cebola, alho, coentro, sal e pimenta."
      />


      <label>
        Imagem atual
      </label>

      <div className="current-image">

        <img
          src={imagem}
          alt="Moqueca de Camarão"
        />

        <button>
          ALTERAR IMAGEM
        </button>

      </div>


      <div className="form-buttons">

        <button
          className="cancel-button"
          onClick={() => navigate("/cardapio")}
        >
          CANCELAR
        </button>

        <button
          className="primary-button"
          onClick={() => navigate("/cardapio")}
        >
          SALVAR ALTERAÇÕES
        </button>

      </div>

    </section>
  );
}

export default EditarPrato;