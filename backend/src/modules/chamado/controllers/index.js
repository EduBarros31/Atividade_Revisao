const ChamadoModel = require('../models/index')



class ChamadoController {

    static async criar(requisicao, resposta){
        try {
            const { protocolo,tipo,status } = requisicao.body
            if( !protocolo || !tipo || !status){
              return  resposta.status(400).json({mensagem:"Todos os campos devem ser fornecidos!"});
            }
            const novoChamado = await ChamadoModel.criar(protocolo,tipo,status)
            resposta.status(201).json({mensagem:" Chamado criado com sucesso",chamado: novoChamado})
        } catch (error) {
            resposta.status(500).json({mensagem:"Erro ao criar o Chamado!", erro: error.message})
        }
    }


   


    static async listarTodos(requisicao, resposta){
        try {
            const chamado = await ChamadoModel.listarTodos()
            if(chamado.length === 0){
                return resposta.status(400).json({mensagem:"Não existe chamados a serem exibidos!"})
            }
            resposta.status(200).json(chamado)
        } catch (error) {
            resposta.status(500).json({mensagem:"Erro ao listar os chamados!", erro: error.message})
        }
    }


    static async listarPorID(requisicao, resposta){
        try {
            const id = requisicao.params.protocolo
            const chamado = await ChamadoModel.listarPorID(id)
            if(chamado.length === 0){
                return resposta.status(400).json({mensagem:"Chamado não encontrado!"})
            }
            resposta.status(200).json(chamado)
        } catch (error) {
            resposta.status(500).json({mensagem:"Erro ao listar por id o chamado!", erro: error.message})
        }
    }







    static async editar(requisicao, resposta){
        try {
            const id = requisicao.params.id
            const { protocolo,tipo,status } = requisicao.body;
            if( !protocolo ||tipo || !status){
                return resposta.status(400).json({menssagem:"Pelo menos um campo atualizado"})
            }
            const ChamadoAtualizado = await ChamadoModel.editar (id,protocolo,tipo,status)
            if(!ChamadoAtualizado){
                return resposta.status(400).json({mensagem:"Chamado não encontrado"})
            }
           resposta.status(200).json({mensagem:"Chamado atualizado com sucesso", aluno: ChamadoAtualizado})
        } catch (error) {
           resposta.status(500).json({mensagem: "Erro ao Editar chamado ", erro: error.message})
        }
    }




    static async excluirPorID(requisicao, resposta) {
        try {
         const id = requisicao.params.id
         const chamado = await ChamadoModel.listarPorID(id)
         if(chamado.length === 0){
          return resposta.status(400).json({mensagem:"Erro ao excluir por id"})
        
        } 
        await ChamadoModel.excluirPorID(id);
        resposta.status(200).json({ mensagem: "Chamado excluido com sucesso!" });
     }
        catch (error) {
           resposta.status(500).json({ mensagem: "Erro ao excluir Chamado!", erro: error.message})
        }
     
     }











    static async excluirTodos(requisicao, resposta){
        try {
            await ChamadoModel.excluirTodos()
            resposta.status(200).json({mensagem:" Todos os chamados ecluidos " })

        } catch (error) {
            resposta.status(500).json({
                mensagem: "Erro ao excluir todos os chamados!",
                erro: error.message,
              });
            }


        }
    


    


}


module.exports = ChamadoController