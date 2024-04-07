import { useState, useEffect } from "react"
// import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { useAsync } from "../hooks/useAsync"
import { useNotification } from '../hooks/useNotification';
import { getProductById } from "../../services/firestore/products"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        const productDoc = doc(db, 'products', itemId)

        getDoc(productDoc)
            .then(queryDocumentSnapshot => {
                const data = queryDocumentSnapshot.data()
                if (queryDocumentSnapshot.exists()) {
                    const productAdapted = { id: queryDocumentSnapshot.id, ...data }
                    setProduct(productAdapted)
                } else {
                    setError("El producto no existe")
                }
            })
            .catch((error) => {
                
                setError("Hubo un error al obtener el producto")
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    if (loading) {
        return <div className="w-full max-w-md mx-auto bg-pink-200 text-center p-8">Cargando...</div>
    }

    if (error) {
        return <div className="w-full max-w-md mx-auto bg-pink-200 text-center p-8">
                    <div className="p-4 bg-black border rounded-md overflow-hidden"> <h3>{error}</h3> </div>
                    <Link to="/" className="block mx-auto mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-center rounded">Volver al menú</Link>
            </div>
    }

    return (
        <div className="w-full max-w-md mx-auto bg-pink-200 text-center p-8">
            {product && <ItemDetail {...product} />}
        </div>
    )
}

// const ItemDetailContainer = () => {
//     const { itemId } = useParams();
//     const { showNotification } = useNotification();

//     const asyncFunction = () => getProductById(itemId)

//     const { data: product, loading, error} = useAsync(asyncFunction, [itemId])

//     if(loading) {
//         return (
//             <div>
//                 <h2 className='title-main'>Obteniendo los detalles del producto...</h2>
//                 <div className="spinner-border text-success" role="status">
//                     <span className="visually-hidden">Loading...</span>
//                  </div>
//             </div> 
//         )
//     }

//     if(error) {
//         showNotification('Error','error','Ocurrió un error al cargar los datos del producto');
//         return <h1 className='title-main'>Hubo un error obteniendo el producto.</h1>
//     }

//     return (
//         <div>
//             {/* <h1 className='title-main'>{  }</h1> */}
//             <ItemDetail {...product}/>
//         </div>
//     )
// }

export default ItemDetailContainer