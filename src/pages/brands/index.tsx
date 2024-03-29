import Head from "next/head";
import styles from "@/styles/BrandsAll.module.css";
import { Prompt, Lato } from "next/font/google";
import Image from "next/image";
import brand1 from "../../../public/assets/brands-logos/WORK_PRO_LIFTE.png";
import brand2 from "../../../public/assets/brands-logos/88434ced-6a7b-4817-b9f2-6c060ec40470.png";
import brand3 from "../../../public/assets/brands-logos/82aa8aab-3493-40e0-873e-4f7dc1cd3792.png";
import brand4 from "../../../public/assets/brands-logos/104a04d9-e509-4ea5-ad82-d06c7bdf3a07.png";
import brand5 from "../../../public/assets/brands-logos/0eb9cbd5-566f-4be3-9191-7a52cfe10bd5.png";
import brand6 from "../../../public/assets/brands-logos/ea52129e-6176-4927-9e4e-63d962e5c948.png";
import Link from "next/link";
// import { products as produ } from "../../assets/dataProducts";
import { montserrat } from "@/styles/fonts";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const prompt = Prompt({
  subsets: ["latin"],
  weight: "400",
});
const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

function BrandsAll({ products }) {
  const attributes = products.map((element) => {
    return element.attributes;
  });
  const filterBrands = (brand) => {
    const lengthBrands = attributes.filter((product) => {
      return product.brand === brand;
    });
    return lengthBrands.length;
  };
  const lengthWokpro = filterBrands("workpro-lifters");
  const lengthEquipson = filterBrands("workpro-sound");
  const lengthLightshark = filterBrands("lightshark");
  const lengthGtrus = filterBrands("G-Truss");
  const lengthFantek = filterBrands("fantek");

  return (
    <>
      <Head>
        <title>Etniapro | Brands</title>
        <meta name="description" content="Brands" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoIcon1.ico" />
      </Head>
      <main className={styles.bransALlContainer}>
        <section className={styles.bransALlContainer__title}>
          <h1 className={montserrat.className}>/ ASSOCIATED BRANDS /</h1>
        </section>

        <section className={styles.bransAllContainer__brands}>
          <section className={styles.bransAllContainer__brands__inter}>
            <article className={styles.bransAllContainer__brand__conteiner}>
              <div className={prompt.className}>
                <Link href={`https://gammaledvision.com/`}>
                  <Image src={brand6} alt="brand3" width={200} height={80} />
                </Link>
              </div>
            </article>
            <article className={styles.bransAllContainer__brand__conteiner}>
              <div className={prompt.className}>
                <Link href={`/brands/workpro-sound?brand=workpro-sound`}>
                  <Image src={brand5} alt="brand3" width={200} height={60} />
                </Link>
                <p className={styles.bransAllContainer__brands__paragraf}>
                  WORKPRO-SOUND {`(${lengthEquipson})`}
                </p>
              </div>
            </article>
            <article className={styles.bransAllContainer__brand__conteiner}>
              <div className={prompt.className}>
                <Link href={`/brands/lightshark?brand=lightshark`}>
                  <Image src={brand2} alt="brand2" width={230} height={40} />
                </Link>
                <br />
                <br />
                <p className={styles.bransAllContainer__brands__paragraf}>
                  LIGTHSHARK {`(${lengthLightshark})`}
                </p>
              </div>
            </article>
          </section>
          <section className={styles.bransAllContainer__brands__inter}>
            <article className={styles.bransAllContainer__brand__conteiner}>
              <div className={prompt.className}>
                <Link href={`/brands/fantek?brand=fantek`}>
                  <Image src={brand4} alt="brand3" width={190} height={80} />
                </Link>
                <p className={styles.bransAllContainer__brands__paragraf}>
                  FANTEK {`(${lengthFantek})`}
                </p>
              </div>
            </article>
            <article className={styles.bransAllContainer__brand__conteiner}>
              <div className={prompt.className}>
                <Link href={`/brands/G-Truss?brand=G-Truss`}>
                  <Image src={brand3} alt="brand3" width={200} height={80} />
                </Link>
                <p className={styles.bransAllContainer__brands__paragraf}>
                  G-TRUSS {`(${lengthGtrus})`}
                </p>
              </div>
            </article>
            <article className={styles.bransAllContainer__brand__conteiner}>
              <div className={prompt.className}>
                <Link href={`/brands/workpro-lifters?brand=workpro-lifters`}>
                  <Image src={brand1} alt="brand1" width={210} height={55} />
                </Link>
                <p className={styles.bransAllContainer__brands__paragraf}>
                  WORKPRO LIFTERS {`(${lengthWokpro})`}{" "}
                </p>
              </div>
            </article>
          </section>
        </section>
      </main>
    </>
  );
}

export default BrandsAll;

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
              brand
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
