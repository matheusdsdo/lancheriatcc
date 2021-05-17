const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const saltRounds = 10

const conexao = require('./Conexao')
const cadastra = require('./Endereco')
const verificaEmail = require('./Email')

router.post('/cadastro' , (req,res) => {
    const nome = req.body.nome
    const sobrenome = req.body.sobrenome
    const email =  req.body.email
    const email2 = req.body.email
    const senha =  req.body.senha
    const cep = req.body.cep
    const cpf = req.body.cpf
    const endereco = req.body.endereco
    const numero = req.body.numero
    const complemento = req.body.complemento

    bcrypt.hash(senha, saltRounds, function(err,hash){
        conexao.query('insert into usuario (nome,sobrenome,senha,email,cpf) values (?,?,?,?,?)',
        [nome,sobrenome,hash,email,cpf] , 
        function (error, result, fields){
            if (!error){
                const codigo = verificaEmail(email)
                console.log(codigo)
                if(verificaEmail(email) != 0){
                  //  cadastra(verificaEmail(email),'Principal',endereco,numero,complemento,cep)
                } else {
                    //NÃO ENCONTROU EMAIL
                }
            } else {
                //DEU ERRO
            }
        }) 
    })
  

    })

module.exports = router