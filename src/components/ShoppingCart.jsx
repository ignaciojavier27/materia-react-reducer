import { useReducer } from "react"
import { shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer"
import ProductItem from "./ProductItem";
import '../App.css'
import CartItem from "./CartItem";
import { TYPES } from "../actions/shoppingActions";

const ShoppingCart = () => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({type: TYPES.ADD_TO_CART, payload: id})
  }

  const deleteToCart = (id, all = false) => {
    all
      ? dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload: id})
      : dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload: id})
  }

  const clearCart = () => {
    dispatch({type: TYPES.REMOVE_ALL_FROM_CART})
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {
          products.map((product) => <ProductItem 
                                      key={product.id}
                                      data={product}
                                      addToCart={addToCart} />)
        }
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={clearCart}>Limpiar</button>
        {
          cart.map((item, index) => <CartItem 
                                      key={index} 
                                      data={item} 
                                      deleteToCart={deleteToCart} />)
        }
      </article>
    </div>
  )
}

export default ShoppingCart
