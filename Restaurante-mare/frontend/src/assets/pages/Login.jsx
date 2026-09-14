import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <main className="auth-page">

      <div className="auth-background">

        <div className="auth-box">

          <div className="auth-logo">
            〰
          </div>

          <h1>MARÉ ALTA</h1>

          <small>RESTAURANTE</small>

          <h2>Bem-vindo de volta!</h2>

          <p>
            Faça login para continuar
          </p>


          <label>E-mail</label>

          <input
            type="email"
            placeholder="seuemail@exemplo.com"
          />


          <label>Senha</label>

          <input
            type="password"
            placeholder="••••••••"
          />


          <button className="forgot">
            Esqueci minha senha
          </button>


          <button
            className="primary-button full"
            onClick={() => navigate("/dashboard")}
          >
            ENTRAR
          </button>


          <div className="auth-bottom">

            <span>
              Ainda não tem uma conta?
            </span>

            <button
              onClick={() => navigate("/cadastro")}
            >
              Cadastrar
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Login;