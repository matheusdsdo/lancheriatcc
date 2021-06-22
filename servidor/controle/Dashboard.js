const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const AutenticaToken = (req,res,next) => {
    const token = req.headers["x-access-token"]
    if (!token){
        res.status(401).send('Você não possui acesso.')
    } else {
        jwt.verify(token , '82nb7934y23n904yb327' , (err,decoded) =>{
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


module.exports = router