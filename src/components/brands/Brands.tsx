import styles from "@/styles/Brands.module.css";
import Image from "next/image";
import brand1 from "../../../public/assets/descargammmmm-removebg-preview.png";
import brand2 from "../../../public/assets/descarga-removebg-preview.png";
import brand3 from "../../../public/assets/descarga__1_-removebg-preview.png";
import Link from "next/link";
import { products as prod } from "../../assets/dataProducts";
import { montserrat } from "@/styles/fonts";

function Brands() {
  return (
    <>
      <main className={styles.bransContainer}>
        <section className={styles.bransContainer__title}>
<<<<<<< HEAD
          <h1 className={montserrat.className}>Marcas asociadas</h1>
=======
          <h1 className={lato.className}>ASSOCIATED BRANDS</h1>
>>>>>>> develop
        </section>
        <section className={styles.bransContainer__brands}>
          <article className={styles.bransContainer__brand1}>
            <div className={styles.bransContainer__brand__circle}>
              <Link href={`/brands/workpro`}>
                <Image src={brand1} alt="brand1" width={200} height={150} />
              </Link>
            </div>
          </article>
          <article className={styles.bransContainer__brand2}>
            <div className={styles.bransContainer__brand__circle}>
              <Link href={`/brands/lightshark`}>
                <Image src={brand2} alt="brand2" width={200} height={150} />
              </Link>
            </div>
          </article>
          <article className={styles.bransContainer__brand3}>
            <div className={styles.bransContainer__brand__circle}>
              <Link href={`/brands/equipson`}>
                <Image src={brand3} alt="brand3" width={200} height={150} />
              </Link>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Brands;
