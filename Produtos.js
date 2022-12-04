const Sequelize = require('sequelize')
const db = require('./db')


const Produto = db.define('Produtos',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    nomeProduto :{
        type:Sequelize.TEXT,
        allowNull:false,

    },
    img:{
        type:Sequelize.TEXT,
        
    },
    precoProduto:{
        type:Sequelize.REAL,
        allowNull:false,
    }
});

//criar a tabela
Produto.sync();
module.exports= Produto;