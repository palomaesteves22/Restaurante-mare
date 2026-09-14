import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">

      <Link to="/" className="logo">
        <div className="logo-icon">〰</div>

        <div>
          <strong>MARÉ ALTA</strong>
          <span>RESTAURANTE</span>
        </div>
      </Link>

      <nav className="nav">

        <Link to="/">
          INÍCIO
        </Link>

        <Link to="/cardapio">
          CARDÁPIO
        </Link>

        <a href="#sobre">
          SOBRE
        </a>

        <a href="#contato">
          CONTATO
        </a>

      </nav>

      <button
        className="header-button"
        onClick={() => navigate("/login")}
      >
        FAZER RESERVA
      </button>

    </header>
  );
}

export default Header;