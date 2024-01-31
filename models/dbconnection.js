
const mysql = require('mysql');


const conecta = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dblist'
});

conecta.connect((err) => {
    if(err){
        console.log("Erro ao conectar ao banco: ", err);
        reject(err);
        return;
    }
    console.log('Conectado do banco, deu bom ;)');
});


module.exports = conecta;