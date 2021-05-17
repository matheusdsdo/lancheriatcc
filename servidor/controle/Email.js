const conexao = require('./Conexao')
function email(email){
    const consulta = 'select codigo from usuario where email='+email
    conexao.query(consulta, function(err, result, fields){
        if (!err){
            return result
        } else {
            return 0
        }
    })
}

module.exports = email