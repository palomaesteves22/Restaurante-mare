const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./src/database/databese");

const authRoutes = require("./src/routes/authRoutes");
const pratosRoutes = require("./src/routes/pratosRoutes");

const {
    verificarToken
} = require("./src/middlewares/authMiddlewares");

const app = express();


// ==========================================
// MIDDLEWARES
// ==========================================

app.use(cors());
app.use(express.json());


// ==========================================
// ROTAS
// ==========================================

// Rotas de cadastro e login
app.use("/auth", authRoutes);

// Rotas dos pratos
app.use("/pratos", pratosRoutes);


// ==========================================
// ROTA PRINCIPAL
// ==========================================

app.get("/", (req, res) => {
    res.json({
        mensagem: "API do Restaurante Maré Alta funcionando!"
    });
});


// ==========================================
// TESTE DO BANCO DE DADOS
// ==========================================

app.get("/teste-banco", async (req, res) => {
    try {
        const resultado = await pool.query("SELECT NOW()");

        res.json({
            mensagem: "Banco conectado com sucesso!",
            horario: resultado.rows[0].now
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensagem: "Erro ao conectar com o banco."
        });
    }
});


// ==========================================
// ROTA PROTEGIDA - TESTE JWT
// ==========================================

app.get("/rota-protegida", verificarToken, (req, res) => {
    res.json({
        mensagem: "Você acessou uma rota protegida!",
        usuario: req.usuario
    });
});


// ==========================================
// INICIAR SERVIDOR
// ==========================================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});