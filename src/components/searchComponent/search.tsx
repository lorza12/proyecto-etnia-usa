import styles from "@/styles/search.module.css";
import Image from "next/image";
import Link from "next/link";
import { montserrat } from "@/styles/fonts";
import React, { useState, useEffect } from "react";
import { products as produ } from "../../assets/dataProducts";

function Search() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setProducts(produ);
  }, []);

  const searcher = (e) => {
    setSearch(e.target.value);
  };
  const result = !search
    ? products
    : products.filter((data) =>
        data.name.toLowerCase().includes(search.toLocaleLowerCase())
      );

  return (
    <main className={styles.searchContainer}>
      <section>
        <input
          value={search}
          onChange={searcher}
          placeholder="Search products..."
          className={styles.searchInput}
        />
      </section>
      <section className={styles.searchProducts}>
        {search ? (
          <table className={montserrat.className}>
            <thead>
              <tr>
                {result.length === 0 ? (
                  <>
                    <p className={styles.searchParagraf}>No results</p>
                  </>
                ) : (
                  <>
                    <th className={styles.th}>Name</th>
                    <th className={styles.th}>Brand</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {result.map((product) => (
                <tr key={product.id}>
                  <td width={"40%"}>
                    <Link
                      key={product.id}
                      href={`/products/${product.id}`}
                      className={styles.productsLink}
                    >
                      {product.name}
                    </Link>{" "}
                  </td>
                  <td>
                    {" "}
                    <Link
                      key={product.id}
                      href={`/products/${product.id}`}
                      className={styles.productsLink}
                    >
                      {product.brand}
                    </Link>{" "}
                  </td>
                  <td>
                    <Link
                      key={product.id}
                      href={`/products/${product.id}`}
                      className={styles.productsLink}
                    >
                      {" "}
                      <Image
                        src={product.image}
                        alt="productDetail"
                        width={80}
                        height={60}
                      />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </section>
    </main>
  );
}

export default Search;
