import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/ProductDetailPage.module.css";
import { useRouter } from "next/router";
// import { products as produ } from "../../assets/dataProducts";
import { montserrat } from "@/styles/fonts";
import { getImageProduct } from "../../services/products";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const ProductDetailPage = ({ products }) => {
  console.log(
    "🚀 ~ file: [name].tsx:12 ~ ProductDetailPage ~ products:",
    products
  );
  const router = useRouter();
  const { name } = router.query;

  const attributes = products.map((element) => {
    return element.attributes;
  });
  const product = attributes.filter(
    (element) => element.name.replace(/ /g, "") === name
  );

  return (
    <>
      <Head>
        <title>Product | Detail</title>
        <meta name="description" content="Product detail" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoIcon1.ico" />
      </Head>

      <main className={montserrat.className}>
        {/* <div>
          {product.map((productos) => {
            <ul>
              {product.attributes.feactures.map((feacture) => {
                <li>{feacture.feacture.tim()}</li>;
              })}
            </ul>;
          })}
        </div> */}
        {product.map((element) => (
          <>
            <section className={styles.ProductDetailContainer}>
              <section className={styles.ProductDetailContainer__mainConteiner}>
                <section className={styles.ProductDetailContainer__info}>
                  <article>
                    <Image
                      src={getImageProduct(element)}
                      alt="productDetail"
                      width={500}
                      height={450}
                    />
                  </article>
                  <article
                    className={styles.ProductDetailContainer__description}
                  >
                    <div>
                      <h2>{element.name}</h2>
                      <p>{element.brand}</p>
                      <br />
                      <span
                        className={
                          styles.ProductDetailContainer__description__tag
                        }
                      >
                        {element.tags}
                      </span>
                      <br />
                      <br />
                      <p>{element.description}</p>
                      <br />
                      <p>{element.description2}</p>
                    </div>
                  </article>
                </section>
              </section>
              <section className={styles.ProductDetailContainer__feactures}>
                {element.features && element.specifications ? (
                  <article
                    className={
                      styles.ProductDetailContainer__feactures__container
                    }
                  >
                    <div>
                      {element.features.length === 0 ? null : (
                        <h4>Feactures:</h4>
                      )}

                      <br />

                      {element.features.map((feature) => (
                        <>
                          <ul key={feature.id} className={styles.feacturesList}>
                            <li>{feature.feature}</li>
                          </ul>
                        </>
                      ))}
                    </div>
                    <div
                      className={styles.ProductDetailContainer__feactures__img}
                    >
                      {element.specifications.length === 0 ? null : (
                        <>
                          <h4>Technical Data</h4>
                          <br />
                          <table
                            border={2}
                            width={"90%"}
                            rules="columns"
                            cellPadding={5}
                            cellSpacing={5}
                          >
                            <thead>
                              <tr>
                                <th>Model</th>
                                <th>{element.name}</th>
                              </tr>
                            </thead>
                            <tbody className={styles.productDetail__table}>
                              {element.specifications.map((element) => (
                                <tr key={element.id}>
                                  <td
                                    align="center"
                                    valign="middle"
                                    color="#333333"
                                    width={"50%"}
                                    height={39}
                                  >
                                    <span
                                      className={
                                        styles.productDetail__paragrafTable
                                      }
                                    >
                                      <strong>{element.name}</strong>
                                    </span>
                                  </td>
                                  <td
                                    align="center"
                                    valign="middle"
                                    color="#333333"
                                    width={"30%"}
                                  >
                                    <span
                                      className={
                                        styles.productDetail__paragrafTable
                                      }
                                    >
                                      <strong>{element.values}</strong>
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </>
                      )}
                    </div>
                  </article>
                ) : null}
              </section>
            </section>
          </>
        ))}
      </main>
    </>
  );
};

export default ProductDetailPage;

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
        products(pagination: { pageSize: 1000 }) {
          data {
            attributes {
              name
              brand
              tags
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              specifications(pagination: { pageSize: 100 }) {
                name
                values
              }
              features {
                feature
              }
              description
              description2
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      products: data?.products?.data,
    },
  };
}
