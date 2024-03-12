import imgCarrito56px from './assets/imgCarrito56px.png'
import classes from './CartWidget.module.css'
import { Link } from 'react-router-dom' 

const CartWidget = ()=>{

    return(
        <Link to='/cart' className='d-flex align-items-center gap-1'>
            <div>
                <img className={classes.imgCart} src= {imgCarrito56px} />
            </div>
            <p className={classes.counterCart}>0</p>
        </Link>
        
    )
}


export default CartWidget