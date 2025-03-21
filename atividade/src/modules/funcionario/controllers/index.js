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
            const { matricula,nome, telefone } = requisicao.body;
            if(!matricula || !nome ||telefone){
                return resposta.status(400).json({menssagem:"Pelo menos um campo atualizado"})
            }
            const alunoAtualizado = await AlunoModel.editar (matricula,nome, email, senha)
            if(!alunoAtualizado){
                return resposta.status(400).json({menssagem:"Aluno não encontrado"})
            }
           resposta.status(200).json({mensagem:"Aluno atualizado com sucesso", aluno: alunoAtualizado})
        } catch (error) {
           resposta.status(500).json({mensagem: "Erro ao Editar Aluno ", erro: error.message})
        }






















}