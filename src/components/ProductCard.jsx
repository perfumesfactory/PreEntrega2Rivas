import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({productId,title,price,image,description,category,}) {

  const imagen = `/src/assets/images/product/${image}`;

  return (
    <>
      <div className="cardContainer">
        <h4>{title}</h4>
        <div className="marcoImagen">
          <img src={imagen} alt={title} />
        </div>
        <div className="tagCategory">{category.replace("_", " ")}</div>
        <p className="descripcion">{description}</p>
        <p className="price">$ {price}</p>

        <button className="botonVerMas">
          <Link to={`/product/${productId}`}>Ver mas..</Link>
        </button>
      </div>
    </>
  );
}
