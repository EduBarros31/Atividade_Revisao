const { pool } = require('../../../config/database')





class ClienteModel {



    static async criar(nome,telefone,email) {
        const dados = [nome,telefone,email]
        const consulta = `insert into cliente (nome,telefone,email) values ($1,$2,$3) returning *`
        const novoCliente = await pool.query(consulta,dados)
        return novoCliente.rows

    }



 
    static async listar() {
      
        const consulta = `select * from cliente`
        const novoCliente = await pool.query(consulta)
        return novoCliente.rows 
  
  
      }




    static async editar(id,nome,telefone,email) {
        const dados = [id,nome,telefone,email]
        const consulta = `update cliente set nome $2, telefone $3, email $4 where id= $1 returning *`
        const ClienteAtualizado= await pool.query(consulta,dados)
        return ClienteAtualizado.rows 
  
  
      }
  

   
  
    
      static async listarPorID(id) {
       try {
        const consulta = `SELECT * FROM cliente WHERE id = $1`;
        const cliente = await pool.query(consulta, [id]);
        return cliente.rows;    
       
        } catch (error) {
          console.error(error.message)
        }
  
  
      }
  
    

      static async excluirPorID(id) {
        const dados = [id]
        const consulta = `delete from cliente where id = $1`
        await pool.query(consulta, dados)
    }





    
    static async excluirTodos() {
        const consulta = `delete from cliente`
        await pool.query(consulta)
    }







}



module.exports = ClienteModel