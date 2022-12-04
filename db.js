const Sequelize = require('sequelize');

const sequelize = new Sequelize("localhost", "root", "123",{
    host:"localhost",
    dialect: 'mysql'
    

})

sequelize.authenticate()
.then(function(){
    console.log('conexão ao banco de dados  feita com sucesso ')

})
.catch(function(){
    console.log('nao foi possivel conectar ao banco de dados')
})

module.exports = sequelize;

