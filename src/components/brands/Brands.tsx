import styles from "@/styles/Brands.module.css";
import Image from "next/image";
import brand1 from "../../../public/assets/brands-logos/0eb9cbd5-566f-4be3-9191-7a52cfe10bd5.png";
import brand2 from "../../../public/assets/brands-logos/88434ced-6a7b-4817-b9f2-6c060ec40470.png";
import brand3 from "../../../public/assets/brands-logos/82aa8aab-3493-40e0-873e-4f7dc1cd3792.png";
import brand4 from "../../../public/assets/brands-logos/104a04d9-e509-4ea5-ad82-d06c7bdf3a07.png";
import Link from "next/link";
import { products as prod } from "../../assets/dataProducts";
import { montserrat } from "@/styles/fonts";

function Brands() {
  return (
    <>
      <main className={styles.bransContainer}>
        <section className={styles.bransContainer__title}>
          <h1 className={montserrat.className}>Marcas asociadas</h1>
        </section>
        <section className={styles.bransContainer__brands}>
          <article className={styles.bransContainer__brand__scale}>
            <div className={styles.bransContainer__brand__circle}>
              <Link href={`/brands/workpro`}>
                <Image src={brand1} alt="brand1" width={200} height={100} />
              </Link>
            </div>
          </article>
          <article className={styles.bransContainer__brand__scale}>
            <div className={styles.bransContainer__brand__circle}>
              <Link href={`/brands/lightshark`}>
                <Image src={brand2} alt="brand2" width={220} height={90} />
              </Link>
            </div>
          </article>
          <article className={styles.bransContainer__brand__scale}>
            <div className={styles.bransContainer__brand__circle}>
              <Link href={`/brands/G-Truss`}>
                <Image src={brand3} alt="brand3" width={200} height={100} />
              </Link>
            </div>
          </article>
          <article className={styles.bransContainer__brand__scale}>
            <div className={styles.bransContainer__brand__circle}>
              <Link href={`/brands/fantek`}>
                <Image src={brand4} alt="brand3" width={200} height={80} />
              </Link>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Brands;
