const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const { errors } = require('celebrate');

const app = express();

/**Métodos HTTP 
*
*GET: Buscar uma informação no back-end
*POST: Criar uma informação no back-end
*PUT: Alterar uma informação no back-end
*DELETE: Deletar uma informação no back-end
*
*/ 

/**Tipos de parametros
 * 
 * Query: parametros nomeados enviados na rota após "?"(filtros, paginação)
 * Route params: parametros utilizados para identificar recursos
 * Request body: corpoda requisição, utilizado para criar ou alterar recursos
 *
 */

 /**Banco de Dados
  * 
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, DyanamoDB
  * 
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */

   /**TDD (Test-driven Development)
    * em português Desenvolvimento Orientado por Testes. Esta é uma técnica empregada no 
    * desenvolvimento de softwares baseado em testes que são escritos antes mesmo do código de produção.
    * */ 

    /**Deploy de Aplicações
     * 
     * Heroku para aplicações pequenas podendo ser colocado em produção de graça 
     * Digital ocean quando sua aplicação começar a ser comerciada e utilizar por clientes.
     * netlify para aplicações pequenas podendo ser colocado em produção de graça especifico para frontend
     */
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());


module.exports = app;