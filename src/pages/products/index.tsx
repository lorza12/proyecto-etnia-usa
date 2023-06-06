import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { products as prod } from "../../assets/dataProducts";
// import styles from "@/styles/Produts.module.css";

const Products = () => {
  return (
    <>
      <Head>
        <title>Products Page</title>
        <meta name="description" content="Products Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>PRODUCTOS</h1>
      <div>
        {prod.map((product) => (
          <>
            <div>
              <Link key={product.id} href={`/products/${product.id}`}>
                <>
                  <p>{product.id}</p>
                  <h2>{product.name}</h2>
                  <Image
                    src={product.image}
                    alt={""}
                    width={200}
                    height={250}
                  ></Image>
                </>
              </Link>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Products;
