const { pool } = require('../../../config/database')





class ChamadoModel {



    static async criar(protocolo,tipo,status) {
      const dados = [protocolo,tipo,status]
      const consulta = `insert into chamado(protocolo,tipo,status) values($1, $2, $3) returning *`
      const novoChamado = await pool.query(consulta,dados)
      return novoChamado.rows 


    }



 
    static async listar() {
      
        const consulta = `select * from chamado`
        const novoChamado = await pool.query(consulta)
        return novoChamado.rows 
  
  
      }




      static async listarPorID(id) {
        try {
         const consulta = `SELECT * FROM chamado WHERE id = $1`;
         const chamado = await pool.query(consulta, [id]);
         return chamado.rows;    
        
         } catch (error) {
           console.error(error.message)
         }
   
   
       }




    static async editar(protocolo,tipo,status) {
        const dados = [protocolo,tipo,status]
        const consulta = `update chamado set tipo $2, status $3 where protocolo= $1 returning *`
        const ChamadoAtualizado= await pool.query(consulta,dados)
        return ChamadoAtualizado.rows 
  
  
      }
  

   
  
    
    
  
    

      static async excluirPorID(id) {
        const dados = [id]
        const consulta = `delete from chamado where id = $1`
        await pool.query(consulta, dados)
    }





    
    static async excluirTodos() {
        const consulta = `delete from chamado`
        await pool.query(consulta)
    }







}



module.exports = ChamadoModel