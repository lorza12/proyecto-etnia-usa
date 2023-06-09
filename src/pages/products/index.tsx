"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { products as prod } from "../../assets/dataProducts";
import styles from "./Products.module.css";
import { useState } from "react";

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

  const filterProducts = (products: ProductModel[]) => {
    return products.filter((product) => {
      return brand === "all" || product.brand === brand;
    });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newBrand = event.target.value;
    setBrand(newBrand);
  };

  const brandType = getUniqueCategory(prod, "brand");
  const filteredProducts = filterProducts(prod);

  return (
    <>
      <Head>
        <title>Products Page</title>
        <meta name="description" content="Products Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.productsGlobalContainer}>
        <h1>PRODUCTOS</h1>
        <div className={styles.productsWrapper}>
          <div className={styles.brandContainer}>
            <h3>Marcas</h3>
            <ul>
              <li>
                <div>
                  <input
                    type="radio"
                    name="brand"
                    value="all"
                    onChange={handleCheckboxChange}
                  />
                  <span>Todas</span>
                </div>
              </li>
              {brandType.map((brand, idx) => (
                <li key={idx}>
                  <div>
                    <input
                      type="radio"
                      name="brand"
                      value={brand}
                      onChange={handleCheckboxChange}
                    />
                    <span>{brand}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.productsContainer}>
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
        </div>
      </div>
    </>
  );
};

export default Products;
