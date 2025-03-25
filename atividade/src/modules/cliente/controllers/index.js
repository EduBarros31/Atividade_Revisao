const ClienteModel = require('../models/index')



class ClienteController {

    static async criar(requisicao, resposta){
        try {
            const { nome, telefone,email } = requisicao.body
            if( !nome || !telefone || !email){
              return  resposta.status(400).json({mensagem:"Todos os campos devem ser fornecidos!"})
            }
            const novoCliente = await ClienteModel.criar(nome, telefone,email)
            resposta.status(201).json({mensagem:" Cliente criado com sucesso",aluno: novoCliente})
        } catch (error) {
            resposta.status(500).json({mensagem:"Erro ao criar o Cliente!", erro: error.message})
        }
    }


   


    static async editar(requisicao, resposta){
        try {
            const id = requisicao.params.id
            const { nome, telefone,email } = requisicao.body;
            if( !nome ||telefone || !email){
                return resposta.status(400).json({menssagem:"Pelo menos um campo atualizado"})
            }
            const ClienteAtualizado = await ClienteModel.editar (id,nome, telefone,email)
            if(!ClienteAtualizado){
                return resposta.status(400).json({mensagem:"Cliente não encontrado"})
            }
           resposta.status(200).json({mensagem:"Cliente atualizado com sucesso", aluno: ClienteAtualizado})
        } catch (error) {
           resposta.status(500).json({mensagem: "Erro ao Editar cliente ", erro: error.message})
        }
    }


    static async listarTodos(requisicao, resposta){
        try {
            const clientes = await ClienteModel.listar()
            if(clientes.length === 0){
                return resposta.status(400).json({mensagem:"Não existe clientes a serem exibidos!"})
            }
            resposta.status(200).json(clientes)
        } catch (error) {
            resposta.status(500).json({mensagem:"Erro ao listar os clientes!", erro: error.message})
        }
    }




    static async listarPorID(requisicao, resposta){
        try {
            const id = requisicao.params.id
            const cliente = await ClienteModel.listarPorID(id)
            if(!cliente){
                return resposta.status(404).json({mensagem:"Cliente não encontrado!"})
            }
            resposta.status(200).json({mensagem:"Cliente encontrado", cliente})
        } catch (error) {
            resposta.status(500).json({mensagem:"Erro ao listar por ID o cliente!", erro: error.message})
        }
    }
   


    static async excluirTodos(requisicao, resposta){
        try {
            await ClienteModel.excluirTodos()
            resposta.status(200).json({mensagem:" Todos os clientes ecluidos " })

        } catch (error) {
            resposta.status(500).json({
                mensagem: "Erro ao excluir todos os clientes!",
                erro: error.message,
              });
            }


        }
    


    
        static async excluirPorID(requisicao, resposta) {
            try {
             const id = requisicao.params.id
             const cliente = await ClienteModel.listarPorID(id)
             if(cliente.length === 0){
              return resposta.status(400).json({mensagem:"Erro ao excluir por matricula"})
            
            } 
            await ClienteModel.excluirPorID(id);
            resposta.status(200).json({ mensagem: "Cliente excluido com sucesso!" });
         }
            catch (error) {
               resposta.status(500).json({ mensagem: "Erro ao excluir Cliente!", erro: error.message})
            }
         
         }


}


module.exports = ClienteController