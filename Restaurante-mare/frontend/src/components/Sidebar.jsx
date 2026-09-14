import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">

      <Link to="/" className="sidebar-logo">

        <div className="logo-icon">
          〰
        </div>

        <div>
          <strong>MARÉ ALTA</strong>
          <span>RESTAURANTE</span>
        </div>

      </Link>

      <nav className="sidebar-menu">

        <Link to="/dashboard">
          🏠
          <span>Início</span>
        </Link>

        <Link to="/cardapio">
          🍽️
          <span>Cardápio</span>
        </Link>

        <Link to="/dashboard">
          📅
          <span>Reservas</span>
        </Link>

        <Link to="/dashboard">
          👤
          <span>Meu Perfil</span>
        </Link>

        <button onClick={() => navigate("/")}>
          ↪
          <span>Sair</span>
        </button>

      </nav>

    </aside>
  );
}

export default Sidebar;