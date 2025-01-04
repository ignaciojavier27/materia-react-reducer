const CartItem = ({ data, deleteToCart }) => {

    const { id, name, price, quantity } = data;

    return (
    <div style={{border:"1px solid black", padding:'1rem'}}>
        <h4>{name}</h4>
        <h5>{price} x {quantity} = ${price*quantity}</h5>
        <button onClick={ () => deleteToCart(id) }>Eliminar</button>
        <br />
        <button onClick={ () => deleteToCart(id, true) }>Eliminar todos</button>
    </div>
    )
}

export default CartItem
