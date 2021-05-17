const express = require('express')
const app = express()
const session = require('express-session')
const flash = require('connect-flash')
var port = 3001

const cors = require('cors')
const main = require('./controle/Main') 
const cadastrar = require('./controle/Cadastro')
const login = require('./controle/Login')
const dashboard = require('./controle/Dashboard')

    //SESSÃO
    app.use(session({
        key: "codigo",
        secret: 'i923ynvb7892t38',
        resave: true,
        saveUninitialized: true,
        cookie: {
            expires: 60 * 60 * 24
        }
    }))
    app.use(flash())
    app.use((req,res,next) => {
        res.locals.success_msg = 'success_msg',
        res.locals.error_msg = 'error_msg',
        next()
    })

    app.use(express.json())
    app.use(cors())

    //ROTAS
    app.use(main)
    app.use(cadastrar)
    app.use(login)
    app.use(dashboard)

app.listen(port, () => {
    console.log('Servidor rodando na porta',port)
})
