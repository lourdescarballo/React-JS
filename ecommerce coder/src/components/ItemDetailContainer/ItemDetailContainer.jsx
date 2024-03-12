import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock" 
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
    }, [itemId])

    return(
        <main>
            <h1>Detalle de producto</h1>
            <ItemDetail {...product} />
        </main>
    )
}

export default ItemDetailContainer