const express = require("express");

const {
    cadastrar,
    login
} = require("../controllers/authController");

const {
    validarCadastro,
    validarLogin
} = require("../validations/authValidation");

const router = express.Router();

router.post(
    "/cadastro",
    validarCadastro,
    cadastrar
);

router.post(
    "/login",
    validarLogin,
    login
);

module.exports = router;