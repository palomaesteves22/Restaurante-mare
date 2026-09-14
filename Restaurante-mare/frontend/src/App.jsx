import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import Cadastro from "./assets/pages/Cadastro";
import Dashboard from "./assets/pages/Dashboard";
import Cardapio from "./assets/pages/Cardapio";
import CadastroPrato from "./assets/pages/CadastroPrato";
import EditarPrato from "./assets/pages/EditarPrato";
import DetalhesPrato from "./assets/pages/DetalhesPrato";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* CADASTRO */}
        <Route path="/cadastro" element={<Cadastro />} />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <div className="admin-layout">
              <Sidebar />

              <main className="admin-content">
                <Dashboard />
              </main>
            </div>
          }
        />

        {/* CARDÁPIO */}
        <Route
          path="/cardapio"
          element={
            <>
              <Header />
              <Cardapio />
            </>
          }
        />

        {/* CADASTRAR PRATO */}
        <Route
          path="/cadastrar-prato"
          element={
            <div className="admin-layout">
              <Sidebar />

              <main className="admin-content">
                <CadastroPrato />
              </main>
            </div>
          }
        />

        {/* EDITAR PRATO */}
        <Route
          path="/editar-prato"
          element={
            <div className="admin-layout">
              <Sidebar />

              <main className="admin-content">
                <EditarPrato />
              </main>
            </div>
          }
        />

        {/* DETALHES */}
        <Route
          path="/detalhes-prato"
          element={
            <>
              <Header />
              <DetalhesPrato />
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;