const { Router } = require("express");
const routes = new Router();
const User = require("./models/User");
const passport = require("passport");
const session = require("express-session");
const crypto = require('crypto');
const flash = require('connect-flash');
const user = require('./models/db');


routes.use(
  session({
    secret: "minhachave_secreta", // Substitua pela sua chave secreta
    resave: false,
    saveUninitialized: false,
  })
);


// Validação de usúario e armazenamento de dados dos uúarios

routes.use(flash());
routes.use(passport.initialize());
routes.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// rotas




routes.get("/cadastrocarros", (req, res) => {
  res.sendFile(__dirname + "/cadastroCarros/index.html");
});

routes.get("/login", (req, res) => {
  res.sendFile(__dirname + "/view/login.html");
});

routes.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/perfil",
    failureRedirect: "/login",
    failureFlash: true
  })
);

routes.get("/perfil", isAuthenticated, (req, res) => {
  res.sendFile(__dirname + "/view/perfil.html");
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
  req.flash('error'); // Redireciona o usuário para a página de login se não estiver autenticado
  }
}



routes.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

routes.get("/pedido", (req, res) => {
  res.sendFile(__dirname + "/view/pedido.html");
})

routes.get("/pagamento", (req, res) => {
  res.sendFile(__dirname + "/view/escolher-forma-pagamento.html");
})


// Página de cadastro

routes.get("/cadastro", (req, res) => {
  res.sendFile(__dirname + "/view/fazer-cadastro.html");
});

// enviando dados ao banco

routes.post("/processar", async (req, res) => {
 
   const { marca, modelo, motor, combustivel, cambio, direcao } = req.body;


   const confirmationToken = crypto.randomBytes(20).toString('hex');


  try {
    // Crie uma entrada no banco de dados usando o modelo
    const user = await User.create({
      marca,
      modelo,
      motor,
      combustivel,
      cambio,
      direcao
    });

    // user.save((err) => {
    //   if (err) {
    //     // Lida com erros
    //   } else {
    //     // Envie um email de confirmação para o usuário
    //     sendConfirmationEmail(email, confirmationToken);
    //     res.send('Verifique seu email para confirmar sua conta.');
    //   }
    // });



    console.log("Dados armazenados no banco de dados:", user.toJSON());
    // res.sendFile(__dirname + "/view/cardapio.html");
  } catch (error) {
    console.error("Erro ao armazenar os dados no banco de dados:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

routes.get('/confirm/:token', (req, res) => {
  const token = req.params.token;

  // Verifique o token no banco de dados
  user.findOne({ confirmationToken: token }, (err, user) => {
    if (err) {
      // Lida com erros
    } else if (!pedido) {
      // Token inválido
      res.send('Token de confirmação inválido ou expirado.');
    } else {
      // Marque o usuário como confirmado
      user.confirmationToken = undefined;
      user.save((err) => {
        if (err) {
          // Lida com erros
        } else {
          // Usuário confirmado com sucesso
          res.send('Sua conta foi confirmada com sucesso.');
        }
      });
    }
  });
})

module.exports = routes;
