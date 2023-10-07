import styles from "@/styles/Products.module.css";
import Image from "next/image";
import Link from "next/link";
import { GiCheckMark } from "react-icons/gi";
import { mainProducts as prod } from "../../assets/dataMainProducts";
import { montserrat } from "@/styles/fonts";
import Search from "@/components/searchComponent/search";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { getImageProduct } from "@/pages/services/products";

function Products({ products }) {
  const attributes = products.map((element) => {
    return element.attributes;
  });
  return (
    <>
      <main className={styles.main2}>
        <div className={styles.productsContainer}>
          <div className={styles.productsContainer__title}>
            <div className={montserrat.className}>
              <h1>/ OUR PRODUCTS /</h1>
            </div>
          </div>

          <div className={styles.productsContainer__products}>
            {attributes.map((product) => (
              <>
                <Link href={`/mainProducts/${product.name.replace(/ /g, "")}`}>
                  <div className={styles.productsContainer__product__cart}>
                    {" "}
                    <Image
                      src={getImageProduct(product)}
                      alt={product.name}
                      width={200}
                      height={150}
                      className={styles.productImage}
                    />
                    <br />
                    <h1 className={montserrat.className}>{product.name}</h1>
                    <p className={montserrat.className}>{product.tags}</p>
                  </div>
                </Link>
              </>
            ))}
          </div>
          <div className={montserrat.className}>
            <div className={styles.productsContainer__title2}>
              <Link href={`/products`}>
                <button className={styles.product__button2}>
                  ALL PRODUCTS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Products;
