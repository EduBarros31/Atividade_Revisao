const express = require('express');

const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.PORTA || 3000;

app.use(express.json());

const chamados = []

app.get('/chamados', (req, res) => {
   try {
    if(chamados.length === 0){
      return res.status(200).json({msg:" banco chamados vazio"})
    }
    res.status(200).json(chamados)
   } catch (error) {
    res.status(500).json({
    msg:"Erro ao buscar chamado",
    erro: error.message
    })
   }

})




app.post('/chamados', (req, res) => {
try {
  const { id, solicitante, problema, prioridade, status } = req.body;
  if (!id || !solicitante || !problema || !prioridade || !status) {
    return res.status(400).json({
      error:"Dados incompletos ! Faltando algum campo"
    });  
  }
const novoChamado = {id, solicitante, problema, prioridade, status};
  chamados.push(novoChamado);
   return res.status(201).json(novoChamado);

} catch (error) {
  res.status(500).json({
   error:"Erro ao cadastrar chamado !"
  })}
});





app.put('/chamados/:id', (req, res) => {
  try {
   const id = req.params.id;
   const { novoSolicitante, novoProblema, novaprioridade, novoStatus } = req.body;
   const chamados = chamados.find(elemento => elemento.id === parseInt(id));

   if(!id){
    return res.status(404).json({msg:"Informe um parametro"})
   }
   if(!id){
    return res.status(404).json({msg:"Chamado encontrado"})

   }

   return res.status(200).json({msg:"Chamado atualizado com sucesso"})

  } catch (error) {
    return resposta.status(500).json({ error: "Erro ao atualizar chamado!" });

    
  }
});





























app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});