"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { products as prod } from "../../assets/dataProducts";
import styles from "./Products.module.css";
import { useEffect, useState } from "react";

export interface ProductModel {
  id: number;
  category: string;
  name: string;
  tags: string;
  image: string;
  brand: string;
  description: string;
  description2: string;
}

const Products = () => {
  const [brand, setBrand] = useState<string>("all");

  const getUniqueCategory = (data: ProductModel[], field: string) => {
    let newElement = data.map((currentElement) => {
      return currentElement[field];
    });
    return (newElement = [...new Set(newElement)]);
  };

  const brandType = getUniqueCategory(prod, "brand");

  const filterProducts = (products: ProductModel[]) => {
    return products.filter((product) => {
      return brand === "all" || product.brand === brand;
    });
  };

  const filteredProducts = filterProducts(prod);

  return (
    <>
      <Head>
        <title>Products Page</title>
        <meta name="description" content="Products Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="styles.productsContainer">PRODUCTOS</h1>

      <div className={styles.productsContainer}>
        <h3>Marcas</h3>
        <ul>
          {brandType.map((brand, idx) => (
            <li key={idx}>
              <div>
                <input type="checkbox" name="brand" value={brand} />
                <span>{brand}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.products__div}>
        {filteredProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <h2>{product.name}</h2>
            <Image
              src={product.image}
              alt={""}
              width={200}
              height={250}
            ></Image>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Products;
