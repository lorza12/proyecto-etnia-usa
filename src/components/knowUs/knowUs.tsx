import styles from "@/styles/KnowUs.module.css";
import Image from "next/image";
import Logo from "../../../public/assets/logo1.png";
import Logo2 from "../knowUs/assets/LOGOETNIAAVL2.png";
import Link from "next/link";
import { montserrat } from "@/styles/fonts";

function KnowUs() {
  return (
    <>
      <main className={styles.main1}>
        <section className={styles.knowUSContainer}>
          <article className={styles.knowUSContainer__logo}>
            <br />
            <Image src={Logo} alt="img logo" width={300} height={150} />
          </article>
          <article className={styles.knowUSContainer__text}>
            <div className={montserrat.className}>
              <h1 className={styles.knowUSContainer__text__h1}>ABOUT US</h1>
              <p className={styles.knowUSContainer__text__p1}>
                We are a company dedicated to the import and export of high
                quality products for the world of Audio, Video, Lighting in the
                sector of shows, live and theatrical events. We focus on direct
                distribution. We are committed to offering{" "}
                <b className={styles.b}> innovative</b> and
                <b className={styles.b}> technological </b> solutions to create
                <b className={styles.b}> unique</b> and
                <b className={styles.b}> memorable </b> experiences.
              </p>
              <Link href={""}>
                <button
                  type="button"
                  className={styles.knowUSContainer__button}
                >
                  MORE INFO{" "}
                </button>
              </Link>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default KnowUs;
