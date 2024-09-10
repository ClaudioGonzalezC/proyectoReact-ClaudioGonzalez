import "./productCard.css";

const ProductCard = ( { titulo, precio } ) => {
    return (
        <div>
            <h3>{titulo}</h3>
            <h4>{precio}</h4>
            <button>Ver detalle</button>
        </div>
    )
}

export default ProductCard