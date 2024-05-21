import { useEffect } from "react";
import { useState } from "react";
import { getProducts } from "../asyncMock";
import { getCategoryProducts } from "../asyncMock";
import "./Catalogo.css";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";

export default function Catalogo() {
  const [products, setProducts] = useState([]);
  const [titulo, setTitulo] = useState("");

  var tituloCategoria="Productos Destacados";  

  const { categoryName } = useParams();  

  useEffect(() => {
    if (categoryName) {
      setTitulo(categoryName.replace("_", " "));
      setProducts(getCategoryProducts(categoryName));
    } else {
      setTitulo("Productos Destacados");
      getProducts.then((data) => setProducts(data));
    }
  }, [categoryName]);

  return (
    <>
      <h1 className="titulo">{titulo}</h1>
      <div className="contenedorCatalogo">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productId={product.id}
            title={product.title.slice(0, 60)}
            price={product.price}
            image={product.image}
            idProd={product.id}
            description={product.description.slice(0, 200)}
            category={product.category}            
          />
        ))}
      </div>
    </>
  );
}
