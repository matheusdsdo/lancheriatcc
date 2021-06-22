const express = require('express')
const router = express.Router()
const conexao = require('./Conexao')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/login' , (req, res) => {
    const usuario = req.body.usuario
    const senha = req.body.senha

    console.log('Chegou no login: ',usuario,senha)

    conexao.query('select * from usuario where email=?',[usuario], (err,result) => {
        if (!err){
            if (result.length > 0){
                //ACHOU
                bcrypt.compare(senha, result[0].senha, (error,response) => {
                    if(response){
                        const token = jwt.sign({
                            codigo: result[0].codigo,
                            email: result[0].email
                        },'82nb7934y23n904yb327',{
                            expiresIn:"2d"
                        })
                        req.session.user = result
                        res.json({auth: true, token: token, result:result})
                    } else {
                        console.log('Senha errada')
                        res.status(401).send({mensagem: 'Usuário não encontrado.'})
                    }
                })
            } else {
                console.log('Não encontrou')
                res.json({auth: false, mensagem:'Erro na autenticação.'})
            }
        } else {
            console.log('Deu erro na conexão ao realizar login!' ,err)
            return res.status(404).send({mensagem: 'Erro geral'})
        }
    })
})

module.exports = router