import BotonNavbar from "./BotonNavbar/BotonNavbar"
import CartWidget from "./CartWidget/CartWidget"
import Logo from "./Logo/Logo"
import { Link } from "react-router-dom"



const Navbar = () =>{



    return (
        <header className="bg-dark container-fluid d-flex justify-content-between">
            <Logo/>        
            <nav className="d-flex align-items-center gap-2">
                <Link to='/category/Vans'>Vans</Link>
                <Link to='/category/Adidas'>Adidas</Link>
                <Link to='/category/Nike'>Nike</Link>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default Navbar