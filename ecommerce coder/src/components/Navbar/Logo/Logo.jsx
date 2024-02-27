import logoShoes from './assets/img/shoes.png'
import classes from './Logo.module.css'

const Logo = () =>{

    return(
        <a className='d-flex flex-column justify-content-center align-items-center'>
            <div>
                <img src={logoShoes} />
            </div>
            <p className={classes.nameLogo}>ShoeStore</p>
        </a>
    )
}

export default Logo