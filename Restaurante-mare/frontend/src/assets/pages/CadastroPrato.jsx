import { useNavigate } from "react-router-dom";

function CadastroPrato() {
  const navigate = useNavigate();

  return (
    <section className="admin-form-page">

      <h1>
        Cadastrar Prato
      </h1>


      <label>
        Nome do prato
      </label>

      <input
        type="text"
        placeholder="Ex.: Moqueca de Camarão"
      />


      <label>
        Descrição
      </label>

      <textarea
        placeholder="Descreva os ingredientes e o preparo do prato..."
      />


      <div className="form-row">

        <div>

          <label>
            Preço (R$)
          </label>

          <input
            type="number"
            placeholder="0,00"
          />

        </div>


        <div>

          <label>
            Categoria
          </label>

          <select>

            <option>
              Selecione
            </option>

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
        placeholder="Liste os ingredientes principais..."
      />


      <label>
        Imagem do prato
      </label>

      <div className="upload-box">

        <span>
          ☁
        </span>

        <p>
          Clique para enviar ou arraste a imagem
        </p>

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
          CADASTRAR
        </button>

      </div>

    </section>
  );
}

export default CadastroPrato;