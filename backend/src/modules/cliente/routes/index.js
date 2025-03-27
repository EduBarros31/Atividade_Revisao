const express = require('express')
const ClienteController = require('../controllers/index')





const router = express.Router()

router.post("/cliente", ClienteController.criar)
router.put("/cliente/:matricula", ClienteController.editar)
router.get("/cliente", ClienteController.listarTodos)
router.get("/cliente/:matricula", ClienteController.listarPorID)
router.delete("/cliente/:matricula", ClienteController.excluirPorID)
router.delete("/cliente", ClienteController.excluirTodos)



module.exports = router;