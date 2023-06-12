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
            <div className={prompt.className}>
              <h1 className={styles.knowUSContainer__text__h1}>ABOUT US</h1>
              <p className={styles.knowUSContainer__text__p1}>
                Somos una empresa dedicada a la importación y exportación de
                productos de alta calidad para el mundo de Audio, Video,
                Iluminación en el sector de espectáculos, eventos en vivo y
                teatral. Nos enfocamos en la distribución directa. Estamos
                comprometidos con ofrecer soluciones{" "}
                <b className={styles.b}>innovadoras</b> y
                <b className={styles.b}> tecnológicas</b> para crear
                experiencias <b className={styles.b}> únicas</b> y
                <b className={styles.b}> memorables</b>.
              </p>
              <Link href={"/about"}>
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
