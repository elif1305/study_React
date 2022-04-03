import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);  // gelen sonuclari almak icin

  useEffect(() => {  // useEffect api ye istek atmak icin
    fetch("https://fakestoreapi.com/products")   // back end den verileri cekmek icin fetch kullandik ,bu fetch yapisni intenet bulabilirsin(fakestoreipa.com adresindende alablirsin). ezber yapma. 
      .then((res) => res.json())
      .then((json) => setProducts(json)); //  api den gelenleri atama islemi yapmak
  }, []);

  return (
    <div>
      <h2>Product Page</h2>
      <div className={styles.products}>
        {products.map((each) => (        // gelen verielri ekranda gostermek icin
          <Link  // burada link verilmesinin amaci, ustune tiklandigi zaman urunun detay sayfasina gitmesi icin,
            to={`details/${each.id}`} // burada detailsin basina / slash koyarsak yeni bir sayfa olarak yonlendirir(ana url den itiberen.).Yani  Yeniden render yapar.
            key={each.id}
            className={styles.product}
          >
            <h6>{each.category}</h6>
            <p>{each.title}</p>
            <img style={{ width: "100px" }} src={each.image} alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
