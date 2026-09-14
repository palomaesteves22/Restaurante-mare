const pool = require("../database/databese");

// LISTAR TODOS OS PRATOS
const listarPratos = async (req, res) => {
    try {
        const resultado = await pool.query(`
            SELECT
                p.id_prato,
                p.nome,
                p.descricao,
                p.preco,
                p.ingredientes,
                p.imagem,
                p.id_categoria,
                c.nome AS categoria
            FROM pratos p
            INNER JOIN categorias c
                ON p.id_categoria = c.id_categoria
            ORDER BY p.id_prato
        `);

        res.status(200).json(resultado.rows);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensagem: "Erro ao listar os pratos."
        });
    }
};


// BUSCAR UM PRATO PELO ID
const buscarPrato = async (req, res) => {
    try {
        const { id } = req.params;

        const resultado = await pool.query(`
            SELECT
                p.id_prato,
                p.nome,
                p.descricao,
                p.preco,
                p.ingredientes,
                p.imagem,
                p.id_categoria,
                c.nome AS categoria
            FROM pratos p
            INNER JOIN categorias c
                ON p.id_categoria = c.id_categoria
            WHERE p.id_prato = $1
        `, [id]);

        if (resultado.rows.length === 0) {
            return res.status(404).json({
                mensagem: "Prato não encontrado."
            });
        }

        res.status(200).json(resultado.rows[0]);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensagem: "Erro ao buscar o prato."
        });
    }
};


// CADASTRAR PRATO
const cadastrarPrato = async (req, res) => {
    try {
        const {
            nome,
            descricao,
            preco,
            ingredientes,
            imagem,
            id_categoria
        } = req.body;

        const resultado = await pool.query(`
            INSERT INTO pratos
            (nome, descricao, preco, ingredientes, imagem, id_categoria)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *
        `, [
            nome,
            descricao,
            preco,
            ingredientes,
            imagem,
            id_categoria
        ]);

        res.status(201).json({
            mensagem: "Prato cadastrado com sucesso!",
            prato: resultado.rows[0]
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensagem: "Erro ao cadastrar o prato."
        });
    }
};


// EDITAR PRATO
const editarPrato = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            nome,
            descricao,
            preco,
            ingredientes,
            imagem,
            id_categoria
        } = req.body;

        const resultado = await pool.query(`
            UPDATE pratos
            SET
                nome = $1,
                descricao = $2,
                preco = $3,
                ingredientes = $4,
                imagem = $5,
                id_categoria = $6
            WHERE id_prato = $7
            RETURNING *
        `, [
            nome,
            descricao,
            preco,
            ingredientes,
            imagem,
            id_categoria,
            id
        ]);

        if (resultado.rows.length === 0) {
            return res.status(404).json({
                mensagem: "Prato não encontrado."
            });
        }

        res.status(200).json({
            mensagem: "Prato atualizado com sucesso!",
            prato: resultado.rows[0]
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensagem: "Erro ao editar o prato."
        });
    }
};


// EXCLUIR PRATO
const excluirPrato = async (req, res) => {
    try {
        const { id } = req.params;

        const resultado = await pool.query(
            "DELETE FROM pratos WHERE id_prato = $1 RETURNING *",
            [id]
        );

        if (resultado.rows.length === 0) {
            return res.status(404).json({
                mensagem: "Prato não encontrado."
            });
        }

        res.status(200).json({
            mensagem: "Prato excluído com sucesso!"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensagem: "Erro ao excluir o prato."
        });
    }
};


module.exports = {
    listarPratos,
    buscarPrato,
    cadastrarPrato,
    editarPrato,
    excluirPrato
};