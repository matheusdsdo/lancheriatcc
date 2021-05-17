const express = require('express')
const router = express.Router()

router.get('/' , (req, res) => {
    console.log('Acesso a raiz')
})

module.exports = router