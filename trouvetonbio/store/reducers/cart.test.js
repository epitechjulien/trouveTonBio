const cartReducer = require('cart')
import { addToCart } from '../actions/cart'


describe ("Cart reducer", function(){
   it("add to cart", function(){
       var state = { items: [] }
       const product = {
          price: 42,
          title: "Mon Super produit de test"
       }
       var newState = cartReducer(state, addToCart())
       console.log(newState);
   }) 
})