const express = require('express');

const Produtos = require('./Produtos');
const app = express();

app.get('/',async(req,res)=>{
    res.send('Pagina iniciada ')
})

app.post('/cadastrar',async(req,res)=>{
    res.send('Pagina cadastrar')
})

app.listen(8080,()=>{
    console.log("Servidos iniciado na porta 8080: localhost:8080")
}

)
