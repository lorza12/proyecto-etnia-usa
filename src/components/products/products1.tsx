import Head from "next/head";
import { Prompt } from "next/font/google";
import styles from "@/styles/Products.module.css";
import Image from "next/image";
import Link from "next/link";
import { GiCheckMark } from "react-icons/gi";
import { mainProducts as prod } from "../../assets/dataMainProducts";

const prompt = Prompt({
  subsets: ["latin"],
  weight: "400",
});

function Products() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main2}>
        <div className={styles.productsContainer}>
          <div className={styles.productsContainer__title}>
            <div className={prompt.className}>
              <h1>Nuestros productos</h1>
            </div>
          </div>

          <div className={styles.productsContainer__products}>
            {prod.map((product) => (
              <>
                <div
                  key={product.id}
                  className={styles.productsContainer__product__section1}
                >
                  <div
                    className={styles.productsContainer__product__section1_1}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={250}
                    />
                    <div className={styles.pading__heareIcon}>
                      <div className={styles.heartIcon}>
                        <GiCheckMark fontSize={22} color="#ffffff" />
                      </div>
                    </div>
                  </div>

                  <div
                    className={styles.productsContainer__product__section1_2}
                  >
                    <h1 className={prompt.className}>{product.name}</h1>
                    <p className={prompt.className}>{product.tags}</p>
                    <br />
                    <Link href={`/products/${product.id}`}>
                      <button type="button" className={styles.product__button}>
                        Ver Producto
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className={prompt.className}>
            <div className={styles.productsContainer__title2}>
              <Link href={`/products`}>
                <button className={styles.product__button2}>
                  Ver todos nuestros productos
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
