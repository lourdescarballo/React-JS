import logoShoes from './assets/img/shoes.png'
import classes from './Logo.module.css'
import { Link } from 'react-router-dom'

const Logo = () =>{

    return(
        <Link to='/' className='d-flex flex-column justify-content-center align-items-center'>
            <div>
                <img src={logoShoes} />
            </div>
            <p className={classes.nameLogo}>ShoeStore</p>
        </Link>
    )
}

export default Logo