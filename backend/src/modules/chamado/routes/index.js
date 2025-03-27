const express = require('express')
const ChamadoController = require('../controllers/index')





const router = express.Router()

router.post("/chamado", ChamadoController.criar)
router.put("/chamado/:id", ChamadoController.editar)
router.get("/chamado", ChamadoController.listarTodos)
router.get("/chamado/:id", ChamadoController.listarPorID)
router.delete("/chamado/:id", ChamadoController.excluirPorID)
router.delete("/chamado", ChamadoController.excluirTodos)



module.exports = router;