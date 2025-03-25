const { pool } = require('../../../config/database')

class FuncionarioModel {



    static async criar(matricula,nome,telefone) {
      const dados = [matricula,nome,telefone]
      const consulta = `insert into funcionario(matricula,nome,telefone) values($1, $2, $3, $4) returning *`
      const novoFuncionario = await pool.query(consulta,dados)
      return novoFuncionario.rows 


    }



 
    static async listar() {
      
        const consulta = `select * from funcionario`
        const novoFuncionario = await pool.query(consulta,dados)
        return novoFuncionario.rows 
  
  
      }




    static async editar(matricula,nome,telefone) {
        const dados = [matricula,nome,telefone]
        const consulta = `insert into funcionario(matricula,nome,telefone) values($1, $2, $3, $4) returning *`
        const FuncionarioAtualizado= await pool.query(consulta,dados)
        return FuncionarioAtualizado.rows 
  
  
      }
  

   
  
    
      static async ListarPorMatricula(matricula) {
        const dados = [matricula]
        const consulta = ` select * from funcionario where matricula = $1`
        const Funcionario = await pool.query(consulta,dados)
        return Funcionario.rows 
  
  
      }
  
    

      static async excluirPorMatricula(matricula) {
        const dados = [matricula]
        const consulta = `delete from funcionario where matricula = $1`
        await pool.query(consulta, dados)
    }





    
    static async excluirTodos() {
        const consulta = `delete from funcionario`
        await pool.query(consulta)
    }







}



module.exports = FuncionarioModel