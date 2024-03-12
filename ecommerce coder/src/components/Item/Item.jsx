import { Link } from "react-router-dom"

const Item = ({id, category, name, img, price}) => {
    return (
        <div class="card">
            <h4>Marca: {category}</h4>
            <h2>{name}</h2>
            <img src={img} style={{ width: 100 }} />
            <h3>Precio: ${price} </h3>
            <Link to={`/item/${id}`} >Ver detalle</Link>
        </div>
    )
}

export default Item