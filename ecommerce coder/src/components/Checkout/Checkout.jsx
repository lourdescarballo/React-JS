import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc, Timestamp } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { Link } from 'react-router-dom'; 
import { useNotification } from '../hooks/useNotification';
import './Checkout.css';


const Checkout = () => {
    
    const { showNotification } = useNotification();
    const { cart, total, clearCart } = useContext(CartContext);
    const [ loading, setLoading ] = useState(false);
    const [ orderId, setOrderId ] = useState(null);
    
    const createOrder = async (userData) => {
        userData.preventDefault()
        setLoading(true)

        const formData = new FormData(userData.target);
        
        try {
            const objOrder = {
                buyer: {
                    name: formData.get('name'),
                    address: formData.get('address'),
                    city: formData.get('city'),
                    phone: formData.get('phone'),
                    email: formData.get('email')
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))

            

            const querySnapshot = await getDocs(productsCollection)
            const { docs } = querySnapshot
        
            docs.forEach(doc => {
                const data = doc.data()
                const stockDb = data.stock
        
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity
        
                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...data})
                }
            })
        
            if (outOfStock.length === 0) {
                batch.commit() 
                const orderCollection = collection(db, 'orders')
                console.log('objOrder:', objOrder);
                const { id } = await addDoc(orderCollection, objOrder)
                
                clearCart()
                setOrderId(id)
            } else {
                console.error('Hay productos que no tienen stock. No se generó la orden de compra')
                showNotification('Error', 'error', `Hay productos fuera de stock. No se pudo generar la orden de compra`)
            }       
        } 
        catch (error) {
            console.error('Error al generar la orden de compra', error);
            showNotification('Error', 'error', `Ocurrió un error al generar la orden de compra`)
        } 
        finally {
            setLoading(false)
        }
    }

    return (
        <div className="row justify-content-center cart-container">
            <h1 className='cart-title'>Checkout</h1>
            
            { !orderId && 
                <form onSubmit={createOrder} className="row justify-content-center text-light needs-validation">
                    <div className="row justify-content-center">
                        <div className="col-md-5 mb-3">
                            <label htmlFor="inputName" className="form-label">Nombre completo</label>
                            <input type="text" className="form-control" id="inputName" name='name' required/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="mb-3 col-md-5">
                            <label htmlFor="inputAdress" className="form-label">Dirección</label>
                            <input type="text" className="form-control" id="inputAdress" name='address' required/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="mb-3 col-md-5">
                            <label htmlFor="inputCity" className="form-label">Ciudad</label>
                            <input type="text" className="form-control" id="inputCity" name='city' required/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="mb-3 col-md-5">
                            <label htmlFor="inputPhone" className="form-label">Número de teléfono</label>
                            <input type="text" className="form-control" id="inputPhone" name='phone' required/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="mb-3 col-md-5">
                            <label htmlFor="inputEmail" className="form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="inputEmail" 
                                name='email'
                                required
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="mb-3 col-md-5">
                            <label htmlFor="inputConfirmEmail" className="form-label">Confirmar email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="inputConfirmEmail" 
                                name='confirmEmail'
                                required
                            />
                        </div>
                    </div>  
                    <div className="mb-3 row justify-content-center">
                        <button className='btn btn-outline-light'>Generar orden de compra</button>
                    </div>
                </form>
            }
            {   loading &&
                <div className="spinner-container row justify-content-center m-5">
                    <h2 className='title-loading'>Su orden de compra está siendo generada...</h2>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> 
            }
            { orderId && 
                <div className='row justify-content-center m-5 order-container'>
                    <h3>¡Gracias por realizar su compra!</h3>
                    <h3>Su orden de compra ha sido generada con éxito con el ID: ${ orderId }</h3>
                </div>
            }
        </div>
    )
}

export default Checkout;

