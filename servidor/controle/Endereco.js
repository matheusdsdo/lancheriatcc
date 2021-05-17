const conexao = require('./Conexao')

function cadastra(codigo_usuario, endereco, numero, complemento, cep){

    conexao.query(
        'insert into enderecos (codigo_usuario,nome,endereco,numero,complemento,cep) values (?,?,?,?,?,?)',
        [codigo_usuario,'Principal',endereco,numero,complemento,cep],
        function(err,result,fields){
            if(!err){
                return 'Certo!'
            } else {
                return 0
            }
        })

}

module.exports = cadastra