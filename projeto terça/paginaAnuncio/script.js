window.addEventListener('load', carregado);

        var db = openDatabase("Concessionaria", "1.0", "Teste", 4048);

        db.transaction(function(tx) {
            tx.executeSql("DROP TABLE IF EXISTS concessionaria");
        });

        db.transaction(function(tx) {
            tx.executeSql("CREATE TABLE IF NOT EXISTS concessionaria (id INTEGER PRIMARY KEY,\
                                                                        marca TEXT,\
                                                                        modelo TEXT,\
                                                                        motor TEXT,\
                                                                        combustivel TEXT,\
                                                                        cambio TEXT,\
                                                                        direcao TEXT)");
        });

        function carregado() {
            document.getElementById('btnCadastrar').addEventListener('click', salvar);
        }

        function salvar() {
            var marca = document.getElementById('marca').value;
            var modelo = document.getElementById('modelo').value;
            var motor = document.getElementById('motor').value;
            var combustivel = document.getElementById('combustivel').value;
            var cambio = document.getElementById('cambio').value;
            var direcao = document.getElementById('direcao').value;

            db.transaction(function(tx) {
                tx.executeSql('INSERT INTO concessionaria (marca, modelo, motor, combustivel, cambio, direcao) VALUES (?, ?, ?, ?, ?, ?)', [marca, modelo, motor, combustivel, cambio, direcao]);
            });

            // Limpar campos de entrada após inserir dados
            document.getElementById('marca').value = '';
            document.getElementById('modelo').value = '';
            document.getElementById('motor').value = '';
            document.getElementById('combustivel').value = '';
            document.getElementById('cambio').value = '';
            document.getElementById('direcao').value = '';
        }

