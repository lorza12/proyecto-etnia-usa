"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { products as prod } from "../../assets/dataProducts";
import styles from "./Products.module.css";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { montserrat } from "@/styles/fonts";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

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
  const [checked, setChecked] = useState(false);
  const [width, setWidth] = useState(0);
  const [top, setTop] = useState(true);
  const [bottom, setBottom] = useState(false);
  const brandCheckboxId = useId();
  const scrollRef = useRef(null);

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

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newBrand = event.target.value;
    setBrand(newBrand);
    setChecked(!checked);
  };

  const brandType = getUniqueCategory(prod, "brand");
  const filteredProducts = filterProducts(prod);

  useLayoutEffect(() => {
    setWidth(scrollRef.current.scrollWidth);
  }, [filteredProducts]);

  const scrollButton = (scrollOffset: number) => {
    const bottom = (scrollRef.current.scrollLeft += scrollOffset);
    const widthRight = width - bottom;
    const buttonRight = widthRight <= 1283 ? true : null;
    const buttonLeft = bottom <= 300 ? true : false;
    setBottom(buttonRight);
    setTop(buttonLeft);
  };

  return (
    <>
      <Head>
        <title>Etniapro | Products</title>
        <meta name="description" content="Products Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoIcon1.ico" />
      </Head>
      <div className={styles.productsGlobalContainer}>
        <h1 className={montserrat.className}>/ PRODUCTS /</h1>
        <div className={styles.productsWrapper}>
          <div className={styles.brandContainer}>
            <label htmlFor={brandCheckboxId} className={styles.brandTitle}>
              <h3 className={montserrat.className}>
                Brands <AiOutlineDown />
              </h3>
            </label>
            <input
              type="checkbox"
              id={brandCheckboxId}
              checked={checked}
              onChange={(e) => setChecked(!checked)}
              hidden
            />
            <ul className={styles.brandList}>
              <li className={styles.brandListItem}>
                <div className={montserrat.className}>
                  <input
                    type="radio"
                    name="brand"
                    value="all"
                    id="all"
                    className={styles.inputBrand}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="all">All</label>
                </div>
              </li>
              {brandType.map((brand, idx) => (
                <li key={idx} className={styles.brandListItem}>
                  <div className={montserrat.className}>
                    <input
                      type="radio"
                      name="brand"
                      value={brand}
                      id={brand}
                      className={styles.inputBrand}
                      onChange={handleRadioChange}
                    />
                    <label htmlFor={brand}>{brand}</label>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.productsContainerMajor}>
            <div className={styles.buttonContainer}>
              <button
                className={styles.productsContainer__btn}
                onClick={() => scrollButton(-300)}
                disabled={top}
              >
                <BsChevronLeft />
              </button>
            </div>

            <div className={styles.productsContainer} ref={scrollRef}>
              {filteredProducts.map((product) => (
                <div key={product.name} className={styles.productsItem}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className={styles.productImage}
                  ></Image>
                  <h2 className={montserrat.className}>{product.name}</h2>
                  <p className={montserrat.className}>{product.tags}</p>
                  <br />
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className={styles.productsLink}
                  >
                    <button className={styles.details}>
                      <h3>{`Details >`}</h3>
                    </button>
                  </Link>
                </div>
              ))}
            </div>

            <div className={styles.buttonContainer}>
              <button
                className={styles.productsContainer__btn}
                onClick={() => scrollButton(300)}
                disabled={bottom}
              >
                <BsChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
