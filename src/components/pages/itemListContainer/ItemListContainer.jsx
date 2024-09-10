import ProductCard from '../../common/productCard/ProductCard';
import './itemListContainer.css'; // Importa los estilos

const itemListContainer = ( { greeting } ) => {
  return (
    <div className="containerList">
      <h1>Selecciona la sorpresa de tu vida</h1>
      <div>
        <ProductCard />
        <ProductCard />
      </div>
      <h5>{greeting}</h5>
    </div>
  )
};

export default itemListContainer;