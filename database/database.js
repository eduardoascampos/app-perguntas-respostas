const Sequelize = require('sequelize')

const connection = new Sequelize('guiapergunta', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection