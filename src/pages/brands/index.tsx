import Head from "next/head";
import styles from "@/styles/BrandsAll.module.css";
import { Prompt, Lato } from "next/font/google";
import Image from "next/image";
import brand1 from "../../../public/assets/brands-logos/0eb9cbd5-566f-4be3-9191-7a52cfe10bd5.png";
import brand2 from "../../../public/assets/brands-logos/88434ced-6a7b-4817-b9f2-6c060ec40470.png";
import brand3 from "../../../public/assets/brands-logos/82aa8aab-3493-40e0-873e-4f7dc1cd3792.png";
import brand4 from "../../../public/assets/brands-logos/104a04d9-e509-4ea5-ad82-d06c7bdf3a07.png";
import Link from "next/link";
import { products as produ } from "../../assets/dataProducts";

const prompt = Prompt({
  subsets: ["latin"],
  weight: "400",
});
const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

function BrandsAll() {
  const filterBrands = (brand) => {
    const lengthBrands = produ.filter((product) => {
      return product.brand === brand;
    });
    return lengthBrands.length;
  };
  const lengthWokpro = filterBrands("workpro");
  const lengthEquipson = filterBrands("equipson");
  const lengthLightshark = filterBrands("lightshark");
  const lengthGtrus = filterBrands("G-Truss");
  const lengthFantek = filterBrands("fantek");

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.bransALlContainer}>
        <section className={styles.bransALlContainer__title}>
          <h1 className={lato.className}>/ ASSOCIATED BRANDS /</h1>
        </section>

        <section className={styles.bransAllContainer__brands}>
          <article className={styles.bransAllContainer__brand__conteiner}>
            <div className={prompt.className}>
              <Link href={`/brands/workpro`}>
                <Image src={brand1} alt="brand1" width={220} height={90} />
              </Link>
              <p className={styles.bransAllContainer__brands__paragraf}>
                WORKPRO {`(${lengthWokpro})`}{" "}
              </p>
            </div>
          </article>
          <article className={styles.bransAllContainer__brand__conteiner}>
            <div className={prompt.className}>
              <Link href={`/brands/lightshark`}>
                <Image src={brand2} alt="brand2" width={220} height={80} />
              </Link>
              <p className={styles.bransAllContainer__brands__paragraf}>
                LIGTHSHRK {`(${lengthLightshark})`}
              </p>
            </div>
          </article>
          <article className={styles.bransAllContainer__brand__conteiner}>
            <div className={prompt.className}>
              <Link href={`/brands/G-Truss`}>
                <Image src={brand3} alt="brand3" width={200} height={100} />
              </Link>
              <p className={styles.bransAllContainer__brands__paragraf}>
                G-TRUSS {`(${lengthGtrus})`}
              </p>
            </div>
          </article>
          <article className={styles.bransAllContainer__brand__conteiner}>
            <div className={prompt.className}>
              <Link href={`/brands/fantek`}>
                <Image src={brand4} alt="brand3" width={200} height={100} />
              </Link>
              <p className={styles.bransAllContainer__brands__paragraf}>
                FANTEK {`(${lengthFantek})`}
              </p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default BrandsAll;
