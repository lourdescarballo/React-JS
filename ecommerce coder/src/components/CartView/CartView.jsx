import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import './CartView.css';

import { getDocs, collection, query, where } from 'firebase/firestore';


const CartView = () => {
    const { cart, removeItem } = useContext(CartContext);

    const calculateTotal = () => {
        let total = 0;
        cart.forEach(product => {
            total += product.quantity * product.price;
        });
        return total;
    };

    return (
        <div>
            <h1 className="cart-title">Carrito de Compras</h1>
            <section className="cart-section">
                {cart.map(product => (
                    <div key={product.id} className="cart-item">
                        <img src={product.img} alt={product.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h2 className="cart-item-name">{product.name}</h2>
                            <p className="cart-item-quantity">Cantidad: {product.quantity}</p>
                            <p className="cart-item-price">Precio unitario: ${product.price}</p>
                            <button className="cart-item-remove-button" onClick={() => removeItem(product.id)}>Eliminar</button>

                        </div>
                    </div>
                ))}
            </section>
            <div className="cart-total">
                <p>Total de la compra: ${calculateTotal()}</p>
            </div>
            <Link to="/Checkout" className="checkout-button">Checkout</Link>
        </div>
    );
}

export default CartView