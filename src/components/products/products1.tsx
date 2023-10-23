import styles from "@/styles/Products.module.css";
import Image from "next/image";
import Link from "next/link";
import { mainProducts as prod } from "../../assets/dataMainProducts";
import { montserrat } from "@/styles/fonts";
import { getImageProduct } from "@/services/products";
function Products() {
  // const attributes = products.map((element) => {
  //   return element.attributes;
  // });
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
            {prod.map((product) => (
              <>
                {/* <Link
                  href={`/mainProducts/${product.name}?name=${product.name}`}
                > */}
                <div className={styles.productsContainer__product__cart}>
                  {" "}
                  <Image
                    // src={getImageProduct(product)}
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={150}
                    className={styles.productImage}
                  />
                  <br />
                  <h1 className={montserrat.className}>{product.name}</h1>
                  <p className={montserrat.className}>{product.tags}</p>
                </div>
                {/* </Link> */}
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
