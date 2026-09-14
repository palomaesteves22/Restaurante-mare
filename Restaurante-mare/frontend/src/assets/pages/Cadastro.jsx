import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();

  return (
    <main className="auth-page">

      <div className="auth-background">

        <div className="auth-box cadastro-box">

          <div className="auth-logo">
            〰
          </div>

          <h1>MARÉ ALTA</h1>

          <small>RESTAURANTE</small>

          <h2>Crie sua conta</h2>

          <p>
            É rápido e fácil!
          </p>


          <label>Nome completo</label>

          <input
            type="text"
            placeholder="Seu nome"
          />


          <label>E-mail</label>

          <input
            type="email"
            placeholder="seuemail@exemplo.com"
          />


          <label>Telefone</label>

          <input
            type="text"
            placeholder="(00) 00000-0000"
          />


          <label>Senha</label>

          <input
            type="password"
            placeholder="••••••••"
          />


          <label>Confirmar senha</label>

          <input
            type="password"
            placeholder="••••••••"
          />


          <button
            className="primary-button full"
            onClick={() => navigate("/dashboard")}
          >
            CRIAR CONTA
          </button>


          <div className="auth-bottom">

            <span>
              Já tem uma conta?
            </span>

            <button
              onClick={() => navigate("/login")}
            >
              Fazer login
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Cadastro;