//! requirements
const express = require('express') // for backend / previous version of JS
const cors = require('cors')
const PORT = process.env.PORT || 8080
const db = require('../database/db')
const {Product, User, CartItem} = require('../util/models')
const seed = require("../util/seed")
const {getAllProducts, addToCart, getCart} = require('../service')

//! middleware
const server = express() // This is all express
server.use(express.json())
server.use(cors())

//! Sequelize DB Associations
User.hasMany(CartItem) // 1:m relationship which enables CartItem functions to be used on User object
CartItem.belongsTo(User) // Create a foreign key on the CartItem table referencing User id
Product.hasMany(CartItem) // 1:m relationship which enables CartItem functions to be used on Product object
CartItem.belongsTo(Product) // Create a foreign key on the CartItem table referencing Product id

//! Endpoints
server.get('/api/products', getAllProducts)
server.post('/api/cart', addToCart)
server.get('/api/cart/:userId', getCart)

//! Database Sync & Seed
db
  .sync({force: true})
  .then(() => {
    console.log("Success")
     seed()
  })
  .catch((err) => {
    console.error("Could not connect")
  })

//! Listen Statement
server.listen(PORT, () => console.log(`Up on ${PORT}`))