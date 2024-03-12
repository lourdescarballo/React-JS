import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name, category, price, img, description, stock} ) =>{
    return(
        <div>
            <img src={img} style={{ width: 100 }} />
            <h2>{name}</h2>
            <h3>Marca: {category}</h3>
            <h3>Precio: ${price} </h3>
            <h4>Descripcion:{description} </h4>
            <ItemCount stock={stock} />
        </div>
    )
}

export default ItemDetail