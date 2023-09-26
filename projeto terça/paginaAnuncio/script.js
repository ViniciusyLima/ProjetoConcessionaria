var db = openDatabase("Concessionaria", "1.0", "Teste", 4048);
db.transaction(function(criar){
    criar.executeSql("CREATE TABLE concessionaria (marca TEXT NOT NULL PRIMARY KEY, modelo TEXT NOT NULL, motor TEXT NOT NULL, combustivel TEXT NOT NULL, cambio TEXT NOT NULL, direcao TEXT NOT NULL)");
});

function salvar(){
    var marca = document.getElementById('marca').value;
    var modelo = document.getElementById('modelo').value;
    var motor = document.getElementById('motor').value;
    var combustivel = document.getElementById('combustivel').value;
    var cambio = document.getElementById('cambio').value;
    var direcao = document.getElementById('direçao').value;
    db.transaction(function(armazenar){
        armazenar.executeSql('INSERT INTO concessionaria (marca,modelo,motor,combustivel,cambio,direcao) VALUES (?,?,?,?,?,?)',[marca,modelo,motor,combustivel,cambio,direcao]);
    });
}

