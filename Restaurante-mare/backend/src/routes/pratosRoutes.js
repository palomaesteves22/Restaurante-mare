const express = require("express");

const {
    listarPratos,
    buscarPrato,
    cadastrarPrato,
    editarPrato,
    excluirPrato
} = require("../controllers/pratosController");

const {
    verificarToken,
    verificarAdmin
} = require("../middlewares/authMiddlewares");

const router = express.Router();


// LISTAR PRATOS
router.get("/", listarPratos);


// BUSCAR PRATO
router.get("/:id", buscarPrato);


// CADASTRAR PRATO
router.post(
    "/",
    verificarToken,
    verificarAdmin,
    cadastrarPrato
);


// EDITAR PRATO
router.put(
    "/:id",
    verificarToken,
    verificarAdmin,
    editarPrato
);


// EXCLUIR PRATO
router.delete(
    "/:id",
    verificarToken,
    verificarAdmin,
    excluirPrato
);


module.exports = router;