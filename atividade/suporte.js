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



// Consultar Chamado pelo ID
app.get('/chamados/:id', (req,res) => {

try {
  const id = req.params.id;
  const chamado = chamados.find(elemento => elemento.id === id)
  if(!chamado){
    return res.status(404).json({msg:"Chamado nao encontrado"})

  }

  res.status(200).json(chamado)

} catch (error) {
  res.status(500).json({
   msg: "Erro ao consultar chamado",
   errr: error.message


  })
}

});



pp.put('/chamado/:id', (req,res) => {
  try {
    const id = req.params.id;
    const {novoSolicitante, novoProblema, novaprioridade, novoStatus} = req.body;

    const chamado = chamados.find(elemento => elemento.id === id)
    
    if(!id){
      return res.status(404).json({msg:"Informe um campo"})

    }
    if(!chamado){
      return res.status(404).json({ error: "Chamado nao encontrado" });
    }
    if (chamado){
      chamado.solicitante = novoSolicitante || chamado.solicitante;
      chamado.problema = novoProblema || chamado.problema;
      chamado.prioridade = novaprioridade || chamado.prioridade;
      chamado.status = novoStatus || chamado.status;


      return res.status(200).json({msg: 'Chamado atualizado com sucesso'});

    }
    
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar chamado" });

  }


});


// rota para deletar chamado
app.delete('./chamados', (req, res) => {
  try {
    chamados.length = 0;
    res.status(200).json({msg:"Chamado Deletado com sucesso"})
 
  } catch (error) {
    res.status(500).json({msg:" Erro ao deletar Chamado"})
   
  }
 });







app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});