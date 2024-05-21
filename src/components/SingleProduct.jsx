import { useParams } from "react-router-dom";
import "./SingleProduct.css";
import { getProduct } from "../asyncMock";
import { useEffect, useState } from "react";

export default function SingleProduct() {
  const [product, setProduct] = useState({});

  const { productId } = useParams();
  const imagen = `/src/assets/images/product/${product.image}`;

  useEffect(() => {
    setProduct(getProduct(productId));
  }, []);
  

  return (
    <>
      <div className="contenedorProducto">
        <div className="flex justify-center space-x-4">
          <div className="w-[50%]">
            <img src={imagen} alt={product.title} />
          </div>
          <div className="w-[50%]">
            <div>
              <h2>{product.title}</h2>
              <span className="etiqueta">{product.category}</span>
              <p className="precio"><span>$</span>{product.price}</p>
              <p className="description"><b>Descripción:</b> {product.description}</p>
            </div>
          </div>
        </div>
        
        
      </div>
    </>
  );
}
