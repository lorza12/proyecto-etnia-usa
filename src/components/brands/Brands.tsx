import styles from "@/styles/Brands.module.css";
import Image from "next/image";
import brand0 from "../../../public/assets/brands-logos/ea52129e-6176-4927-9e4e-63d962e5c948.png";
import brand1 from "../../../public/assets/brands-logos/1f624ddc-3cc2-4b0c-8e4b-5c10ad00bad8.jpg";
import brand2 from "../../../public/assets/brands-logos/88434ced-6a7b-4817-b9f2-6c060ec40470.png";
import brand3 from "../../../public/assets/brands-logos/82aa8aab-3493-40e0-873e-4f7dc1cd3792.png";
import brand4 from "../../../public/assets/brands-logos/104a04d9-e509-4ea5-ad82-d06c7bdf3a07.png";
import brand5 from "../../../public/assets/brands-logos/0eb9cbd5-566f-4be3-9191-7a52cfe10bd5.png";
import Link from "next/link";
import { montserrat } from "@/styles/fonts";

function Brands() {
  return (
    <>
      <main className={styles.bransContainer}>
        <section className={styles.bransContainer__title}>
          <h1 className={montserrat.className}>FEATURED BRANDS</h1>
        </section>
        <section className={styles.bransContainer__brands}>
          <section className={styles.bransContainer__brands__inter}>
            <article className={styles.bransContainer__brand__scale}>
              <div className={styles.bransContainer__brand__circle}>
                <Link href={`https://gammaledvision.com/`}>
                  <Image src={brand0} alt="brand0" width={200} height={80} />
                </Link>
              </div>
            </article>
            <article className={styles.bransContainer__brand__scale}>
              <div className={styles.bransContainer__brand__circle}>
                <Link href={`/brands/lightshark`}>
                  <Image src={brand2} alt="brand2" width={230} height={40} />
                </Link>
              </div>
            </article>
            <article className={styles.bransContainer__brand__scale}>
              <div className={styles.bransContainer__brand__circle}>
                <Link href={`/brands/G-Truss`}>
                  <Image src={brand3} alt="brand3" width={190} height={70} />
                </Link>
              </div>
            </article>
          </section>
          <section className={styles.bransContainer__brands__inter}>
            <article className={styles.bransContainer__brand__scale}>
              <div className={styles.bransContainer__brand__circle}>
                <Link href={`/brands/equipson`}>
                  <Image src={brand5} alt="brand3" width={190} height={50} />
                </Link>
              </div>
            </article>
            <article className={styles.bransContainer__brand__scale}>
              <div className={styles.bransContainer__brand__circle}>
                <Link href={`/brands/fantek`}>
                  <Image src={brand4} alt="brand3" width={180} height={50} />
                </Link>
              </div>
            </article>
            <article className={styles.bransContainer__brand__scale}>
              <div className={styles.bransContainer__brand__circle}>
                <Link href={`/brands/workpro`}>
                  <Image src={brand1} alt="brand1" width={190} height={60} />
                </Link>
              </div>
            </article>
          </section>
        </section>
      </main>
    </>
  );
}

export default Brands;
