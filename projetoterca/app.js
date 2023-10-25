const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');

// aqui está o arquivo de execução principal e o banco de dados SQLite
class App{
  constructor(){
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(cors());
    this.server.use(express.json());
    this.server.set('view engine', 'ejs');
    this.server.use(bodyParser.urlencoded({ extended: false }));
    this.server.use(bodyParser.json());
    this.server.use(express.static('src/view'));
  }

  routes(){
    this.server.use(routes);
   
  }
}

module.exports = new App().server;