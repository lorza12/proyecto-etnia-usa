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
  const [productData, setProductData] = useState<ProductModel[]>(prod);
  /* const [selectedCategories, setSelectedCategories] = useState<{ */
  /*   brand: string; */
  /*   category: string; */
  /* }>({ */
  /*   brand: "", */
  /*   category: "", */
  /* }); */
  const [selectedCategories, setSelectedCategories] = useState({
    brand: "",
    category: "",
  });

  const getUniqueCategory = (data: ProductModel[], field: string) => {
    let newElement = data.map((currentElement) => {
      return currentElement[field];
    });
    return (newElement = [...new Set(newElement)]);
  };

  const categoryType = getUniqueCategory(prod, "brand");
  const brandType = getUniqueCategory(prod, "category");

  /* const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { */
  /*   if (event.target.checked) { */
  /*     setSelectedCategories({ */
  /*       ...selectedCategories, */
  /*       [event.target.name]: event.target.value, */
  /*     }); */
  /*   } else { */
  /*     const noSelected = selectedCategories.filter( */
  /*       (categ: any) => categ !== event.target.value */
  /*     ); */
  /*     setSelectedCategories(noSelected); */
  /*   } */
  /* }; */
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!true) {
      setSelectedCategories(
        selectedCategories.filter((categ) => categ !== event.target.value)
      );
    }
  };

  console.log(selectedCategories);

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
        <ul>
          {categoryType.map((category, idx) => (
            <li key={idx}>
              <div>
                <input
                  type="checkbox"
                  name="category"
                  value={category}
                  checked={selectedCategories.category.includes(category)}
                  onChange={(e) =>
                    setSelectedCategories({
                      ...selectedCategories,
                      category: e.target.value,
                    })
                  }
                />
                <span>{category}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {brandType.map((brand, idx) => (
            <li key={idx}>
              <div>
                <input
                  type="checkbox"
                  name="brand"
                  value={brand}
                  checked={selectedCategories.brand.includes(brand)}
                  onChange={(e) =>
                    setSelectedCategories({
                      ...selectedCategories,
                      brand: e.target.value,
                    })
                  }
                />
                <span>{brand}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.products__div}>
        {productData.map((product) => (
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
