const { z } = require("zod");

const cadastroSchema = z.object({
    nome: z
        .string()
        .min(3, "O nome deve ter pelo menos 3 caracteres."),

    email: z
        .string()
        .email("Informe um email válido."),

    senha: z
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres.")
});

const loginSchema = z.object({
    email: z
        .string()
        .email("Informe um email válido."),

    senha: z
        .string()
        .min(1, "A senha é obrigatória.")
});

const validarCadastro = (req, res, next) => {
    const resultado = cadastroSchema.safeParse(req.body);

    if (!resultado.success) {
        return res.status(400).json({
            mensagem: resultado.error.issues[0].message
        });
    }

    next();
};

const validarLogin = (req, res, next) => {
    const resultado = loginSchema.safeParse(req.body);

    if (!resultado.success) {
        return res.status(400).json({
            mensagem: resultado.error.issues[0].message
        });
    }

    next();
};

module.exports = {
    validarCadastro,
    validarLogin
};