const {Product, User, CartItem} = require('./models')

const newProducts = [
  {
    name: "Sharpie",
    price: 3.99
  },
  {
    name: "Pencil",
    price: 0.49
  },
  {
    name: "Pen",
    price: 1.99
  },
  {
    name: "Notepad",
    price: 5.99
  },
  {
    name: "Gold Plated Paper",
    price: 5999.99
  },
]

const newUsers = [
  {
    username: "kendra",
    password: "drowssap"
  },
  {
    username: "louise",
    password: "notTing4am"
  },
  {
    username: "dallas",
    password: "cowboysLife"
  }
]

const newCartItems = [
  {
    userId: 1,
    productId: 4
  },
  {
    userId: 2,
    productId: 2
  },
  {
    userId: 2,
    productId: 3
  },
  {
    userId: 3,
    productId: 4
  }
]

const seed = async () => {
  await Product.bulkCreate(newProducts)
  await User.bulkCreate(newUsers)
  await CartItem.bulkCreate(newCartItems)
  console.log("Seeding complete!")
}

module.exports = seed