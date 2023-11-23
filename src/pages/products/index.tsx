"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// import { products as prod } from "../../assets/dataProducts";
import styles from "./Products.module.css";
import { useEffect, useId, useRef, useState } from "react";
import { montserrat } from "@/styles/fonts";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import Search from "@/components/searchComponent/search";
import { getImageProduct } from "../../services/products";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

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

const Products = ({ products }) => {
  const [brand, setBrand] = useState<string>("all");
  const [checked, setChecked] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return null;
  });
  const [top, setTop] = useState<boolean>(true);
  const [bottom, setBottom] = useState<boolean>(false);
  const brandCheckboxId = useId();
  const scrollRef = useRef(null);
  const attributes = products.map((element) => {
    return element.attributes;
  });

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "productsState",
      JSON.stringify({ brand, checked, top, bottom })
    );
  }, [brand, checked, top, bottom]);

  useEffect(() => {
    const storedState = localStorage.getItem("productsState");
    if (storedState) {
      const {
        brand: storedBrand,
        checked: storedChecked,
        top: storedTop,
        bottom: storedBottom,
      } = JSON.parse(storedState);
      setBrand(storedBrand);
      setChecked(storedChecked);
      setTop(storedTop);
      setBottom(storedBottom);
    }
  }, []);

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
    scrollRef.current.scrollLeft *= 0;
    setTop(true);
    setBottom(false);
  };

  const brandType = getUniqueCategory(attributes, "brand");

  const filteredProducts = filterProducts(attributes);

  const scrollSlide = () => {
    if (windowSize >= 710 && windowSize <= 768) {
      return 400;
    } else {
      return 300;
    }
  };

  const sizeScroll = scrollSlide();

  const scrollButton = (scrollOffset: number) => {
    const scrollPosition = (scrollRef.current.scrollLeft += scrollOffset);
    const scrollToTop =
      Math.floor(
        scrollRef.current.scrollWidth - (scrollRef.current.scrollLeft + 1)
      ) <= scrollRef.current.clientWidth;
    const buttonLeft = scrollPosition <= 300 ? true : false;
    setBottom(scrollToTop);
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
        <div className={styles.productsGlobalContainer__search}>
          <Search />
        </div>

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
                    defaultChecked
                    className={styles.inputBrand}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="all">All</label>
                </div>
              </li>
              <li className={styles.brandListItem}>
                <div className={montserrat.className}>
                  <Link href={"https://gammaledvision.com/"} target="blank">
                    <p>Gamma</p>
                  </Link>
                </div>
              </li>
              {brandType.map((brand, idx) => (
                <li key={idx} className={styles.brandListItem}>
                  {brand === "Lightshark" ? <p>Lightshark</p> : null}
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
                onClick={() => scrollButton(-sizeScroll)}
                disabled={top}
              >
                <BsChevronLeft />
              </button>
            </div>
            <div className={styles.productsContainer} ref={scrollRef}>
              {filteredProducts.map((element) => (
                <div key={element.id} className={styles.productsItem}>
                  <Link
                    href={`/products/${element.name}?name=${element.name}`}
                    className={styles.productsLink}
                  >
                    <Image
                      src={getImageProduct(element)}
                      alt={element.name}
                      width={300}
                      height={300}
                      className={styles.productImage}
                    />
                  </Link>
                  <h2 className={montserrat.className}>{element.name}</h2>
                  <p className={montserrat.className}>{element.tags}</p>
                  <br />

                  <Link
                    key={element.id}
                    href={`/products/${element.name}?name=${element.name}`}
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
                onClick={() => scrollButton(sizeScroll)}
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
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: "https://etniapro-admin-6813ee4430db.herokuapp.com/graphql",
    cache: new InMemoryCache({
      addTypename: false,
      resultCaching: false,
    }),
  });

  const { data } = await client.query({
    query: gql`
      query getProduct {
        products(pagination: { page: 1, pageSize: 100 }) {
          data {
            id
            attributes {
              name
              brand
              tags
              features {
                feature
              }
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  console.log(data.products.data);

  return {
    props: {
      products: data?.products?.data,
    },
  };
}
