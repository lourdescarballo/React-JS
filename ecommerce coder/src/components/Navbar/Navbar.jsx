import BotonNavbar from "./BotonNavbar/BotonNavbar"
import CartWidget from "./CartWidget/CartWidget"
import Logo from "./Logo/Logo"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'



const Navbar = () =>{
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const categoriesCollection = query(collection(db, 'categories'), orderBy('order', 'asc'))
        
        getDocs(categoriesCollection)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setCategories(categoriesAdapted)
            })
            .catch(error => {
                console.error('error')
            })
    }, [])


    return (
        <header className="bg-dark container-fluid d-flex justify-content-between">
            <Logo/>        
            <nav className="d-flex align-items-center gap-2">
            {
                    categories.map(cat => {
                        return <Link key={cat.id} to={`/category/${cat.slug}`}>{cat.name}</Link>
                    })
                }
                <Link to='/category/Vans'>Vans</Link>
                <Link to='/category/Adidas'>Adidas</Link>
                <Link to='/category/Nike'>Nike</Link>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default Navbar