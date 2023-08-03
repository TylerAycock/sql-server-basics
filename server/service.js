const {Product, CartItem, User} = require('./util/models')

module.exports = {
  getAllProducts: async (req, res) => {
    const products = await Product.findAll(
    {
      include: [
        {
          model: CartItem,
          attributes: ["id"]
        }
      ]
    }
   )
    res.status(200).send(products)
  },
  addToCart: async (req, res) => {
    const {productId, userId} = req.body
    await CartItem.create({productId, userId})
    res.status(200).send("Added to Cart")
  },
  getCart: async (req, res) => {
    const {userId} = req.params
    const cart = await CartItem.findAll({
      where: {userId},
      include: [
        Product,
        {
          model: User,
          attributes: ["username"]
        }
      ]
    })
    res.status(200).send(cart)
  }
}