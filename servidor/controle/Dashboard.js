const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

/*
const AutenticaToken = (req,res,next) => {
    //console.log(token)
    if (!token){
        res.status(401).send('Você não possui acesso.')
    } else {
        jwt.verify(token , "jwtSecret" , (err,decoded) =>{
            if (err){
                res.json({auth: false, message: 'Falha na autenticação'})
            } else {
                req.codigo = decoded.codigo
                next()
            }
        })
    }
}

router.get('/dashboard', AutenticaToken , (req,res) => {
    res.status(200).send('Autenticado')
})
*/

module.exports = router