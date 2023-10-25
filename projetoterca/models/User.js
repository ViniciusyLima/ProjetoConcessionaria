const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('users', {
   id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   marca: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
   },
   modelo: {
      type: Sequelize.STRING,
      allowNull: true
   },
   motor: {
      type: Sequelize.DOUBLE,
      allowNull: true
   },
   combustivel: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   cambio: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   direcao: {
      type: Sequelize.STRING,
      allowNull: false,
   }
});

// Criar a Tabela caso não exista

User.sync({force: false}) // use true apenas para recriar a tabela
.then(() => {
   console.log('Tabela criada com sucesso');
 })
 .catch((error) => {
   console.error('Erro ao criar a tabela:', error);
 });

 
// Verificar se a alguma alteração na tabela, se tiver ele altera
User.sync({ alter: true})
module.exports = User;