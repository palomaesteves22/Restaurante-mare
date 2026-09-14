const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../database/databese");

const cadastrar = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        const emailExistente = await pool.query(
            "SELECT * FROM usuarios WHERE email = $1",
            [email]
        );

        if (emailExistente.rows.length > 0) {
            return res.status(400).json({
                mensagem: "Este email já está cadastrado."
            });
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const resultado = await pool.query(
            `INSERT INTO usuarios (nome, email, senha)
             VALUES ($1, $2, $3)
             RETURNING id_usuario, nome, email, tipo`,
            [nome, email, senhaCriptografada]
        );

        res.status(201).json({
            mensagem: "Usuário cadastrado com sucesso!",
            usuario: resultado.rows[0]
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensagem: "Erro ao cadastrar usuário."
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, senha } = req.body;

        const resultado = await pool.query(
            "SELECT * FROM usuarios WHERE email = $1",
            [email]
        );

        if (resultado.rows.length === 0) {
            return res.status(401).json({
                mensagem: "Email ou senha incorretos."
            });
        }

        const usuario = resultado.rows[0];

        const senhaCorreta = await bcrypt.compare(
            senha,
            usuario.senha
        );

        if (!senhaCorreta) {
            return res.status(401).json({
                mensagem: "Email ou senha incorretos."
            });
        }

        const token = jwt.sign(
            {
                id: usuario.id_usuario,
                tipo: usuario.tipo
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "2h"
            }
        );

        res.status(200).json({
            mensagem: "Login realizado com sucesso!",
            token,
            usuario: {
                id: usuario.id_usuario,
                nome: usuario.nome,
                email: usuario.email,
                tipo: usuario.tipo
            }
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensagem: "Erro ao realizar login."
        });
    }
};

module.exports = {
    cadastrar,
    login
};