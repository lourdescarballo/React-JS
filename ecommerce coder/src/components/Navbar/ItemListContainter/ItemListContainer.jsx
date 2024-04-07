import { useState, useEffect, memo } from "react"
import ItemList from "../../ItemList/ItemList" 
import { useParams } from "react-router-dom"
import { getProducts } from "../../../services/firestore/products"
import { useAsync } from "../../hooks/useAsync"
import { useNotification } from "../../hooks/useNotification"
import { getDocs, collection, query, where} from 'firebase/firestore'
import { db } from "../../../services/firebase/firebaseConfig"


const ItemListMemoized = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState()
    const [render, setRender] = useState(false)

    const { categoryId } = useParams()

    const { showNotification } = useNotification()

    useEffect(() => {
        setTimeout(() => {
            setRender(prev => !prev)
        }, 1000)
    }, [])

    useEffect(() => {

        const productsCollection = categoryId ? (
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : (
            collection(db, 'products')
        )

        getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const data = doc.data()

                    return { id: doc.id, ...data}
                })

                setProducts(productsAdapted)
            })
            .catch(() => {
                showNotification('error', 'Hubo un error cargado los productos')
            })        
        
    }, [categoryId])

    return (
      <main className="min-h-96 container mx-auto">
      <h2 className="text-2xl text-center font-bold">{greeting}</h2>
      <ItemList products={products}/>
    </main>
         
    )
}
// const ItemListMemoized = memo(ItemList)



// const ItemListContainer = ({ greeting }) => {                               
//     const { categoryId } = useParams()
    
//     const asyncFunction = () =>  getProducts(categoryId)
    
//     const { data: products, loading, error } = useAsync(asyncFunction, [categoryId])
    
//     if(loading) {
//         return <h1>Se estan cargando los productos...</h1>
//     }

//     if(error) {
//         return <h1>Hubo un error al cargar los productos</h1>
//     }

//     return (
//         <div>
//             <h1 style={{fontSize:30 , marginTop:50}} >{greeting}</h1>
//             <div className="d-flex flex-wrap justify-content-center">
//             <ItemListMemoized products={products} />
//             </div>
//         </div>
//     )
// }

export default ItemListContainer