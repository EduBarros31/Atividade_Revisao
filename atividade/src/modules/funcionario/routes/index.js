
const express = require('express')
const FuncionarioController = require('../controllers/index')





const router = express.Router()

router.post("/funcionario", FuncionarioController.criar)
router.put("/funconario/:matricula", FuncionarioController.editar)
router.get("/funcionario", FuncionarioController.listarTodos)
router.get("/funcionario/:matricula", FuncionarioController.listarPorMatricula)
router.delete("/funcionario/:matricula", FuncionarioController.excluirPorMatricula)
router.delete("/funcionario", FuncionarioController.excluirTodos)



module.exports = router;