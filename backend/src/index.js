const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');
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
app.use(cors());
app.use(express.json());
app.use(morgan());
app.use(routes);
app.use(errors());


app.listen(process.env.PORT || 3333);