const express = require('express');

const Produtos = require('./Produtos');
const app = express();

app.use(express.json())

app.get('/',async(req,res)=>{
    res.send('Pagina iniciada ')
})

app.post('/cadastrar',async(req,res)=>{
    await Produtos.create(req.body).then(()=>{
        .then(()=>{
            return res.json({
                erro:false,
                mensagem:'usuario cadastrado com sucesso '
            })

        })
        return res.status(400).json({
            erro:false,
            mensagem:'Erro:usuario nao cadastrado '
        })
    })
    res.send('Pagina cadastrar')
})

app.listen(8080,()=>{
    console.log("Servidos iniciado na porta 8080: localhost:8080")
}

)
