import Item from "../Item/Item"
const ItemList = ({products}) => {
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {
                products.map((product) => {
                    return (
                       <Item key={product.id} {...product} />
                    )
                })
            }
        </div>
    )
}

export default ItemList