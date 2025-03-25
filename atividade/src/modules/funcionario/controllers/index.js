const FuncionarioModel = require('../models/index')



class FuncionarioController {

    static async criar(requisicao, resposta){
        try {
            const { matricula, nome, telefone } = requisicao.body
            if(!matricula || !nome || !telefone){
              return  resposta.status(400).json({mensagem:"Todos os campos devem ser fornecidos!"})
            }
            const novoFuncionario = await FuncionarioModel.criar(matricula, nome, telefone)
            resposta.status(201).json({mensagem:" Funcionario criado com sucesso",aluno: novoFuncionario})
        } catch (error) {
            resposta.status(500).json({mensagem:"Erro ao criar o Funcionario!", erro: error.message})
        }
    }


   


    static async editar(requisicao, resposta){
        try {
             const matricula = requisicao.params.matricula
            const { nome, telefone } = requisicao.body;
            if( !nome ||telefone){
                return resposta.status(400).json({menssagem:"Pelo menos um campo atualizado"})
            }
            const FuncionarioAtualizado = await AlunoModel.editar (matricula,nome, telefone)
            if(!FuncionarioAtualizado){
                return resposta.status(400).json({menssagem:"Aluno não encontrado"})
            }
           resposta.status(200).json({mensagem:"Funcionario atualizado com sucesso", aluno: alunoAtualizado})
        } catch (error) {
           resposta.status(500).json({mensagem: "Erro ao Editar funcionario ", erro: error.message})
        }
    }


    static async listarTodos(requisicao, resposta){
        try {
            const funcionarios = await FuncionarioModel.listar()
            if(funcionarios.length === 0){
                return resposta.status(400).json({mensagem:"Não existe funcionarios a serem exibidos!"})
            }
            resposta.status(200).json(funcionarios)
        } catch (error) {
            resposta.status(500).json({mensagem:"Erro ao listar os funcionarios!", erro: error.message})
        }
    }




    static async listarPorMatricula(requisicao, resposta){
        try {
            const matricula = requisicao.params.matricula
            const funcionario = await FuncionarioModel.listarPorMatricula(matricula)
            if(funcionario.length === 0){
                return resposta.status(400).json({mensagem:"Funcionario não encontrado!"})
            }
            resposta.status(200).json(aluno)
        } catch (error) {
            resposta.status(500).json({mensagem:"Erro ao listar por matricula o funcionario!", erro: error.message})
        }
    }
   


    static async excluirTodos(requisicao, resposta){
        try {
            await FuncionarioModel.excluirTodos()
            resposta.status(200).json({mensagem:" Todos os funcionarios ecluidos " })

        } catch (error) {
            resposta.status(500).json({
                mensagem: "Erro ao excluir todos os funcionarios!",
                erro: error.message,
              });
            }


        }
    


    
        static async excluirPorMatricula(requisicao, resposta) {
            try {
             const matricula = requisicao.params.matricula
             const funcionario = await FuncionarioModel.listarPorMatricula(matricula)
             if(funcionario.length === 0){
              return resposta.status(400).json({mensagem:"Erro ao excluir por matricula"})
            
            } 
            await FuncionarioModel.excluirPorMatricula(matricula);
            resposta.status(200).json({ mensagem: "Funcionario excluido com sucesso!" });
         }
            catch (error) {
               resposta.status(500).json({ mensagem: "Erro ao excluir Funcionario!", erro: error.message})
            }
         
         }


}


module.exports = FuncionarioController