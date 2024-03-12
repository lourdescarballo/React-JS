import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../../asyncMock"
import ItemList from "../../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer =({greeting})=>{
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(()=>{
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(result => {
                setProducts(result)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])

    return (
        <div>
            <h1 style={{fontSize:30 , marginTop:50}} >{greeting}</h1>
            <div className="d-flex flex-wrap justify-content-center">
            <ItemList products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer