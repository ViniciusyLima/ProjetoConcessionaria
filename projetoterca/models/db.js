const Sequelize = require('sequelize');
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;


const connection = new Sequelize("concessionaria", "root", "root", {
    host: 'localhost',
    dialect: 'mysql'
});

connection.authenticate()
.then(function(){
   console.log("Realizado com sucesso");
}).catch(function(){
    console.log("Não realizado");
})

passport.use(new LocalStrategy(
  (email, password, done) => {
    // Lógica de autenticação personalizada
    User.findOne({ email: email }, (err, user) => {
      if (err) { return done(err); }
      if (!user) { return done(null, false, { message: 'Email incorreto' })};
      if (user.password !== password) { return done(null, false, { message: 'Senha incorreta' })};
      return done(null, user);
    });
  }
));


  
module.exports = connection;

