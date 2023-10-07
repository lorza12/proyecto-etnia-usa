import styles from "@/styles/KnowUs.module.css";
import Image from "next/image";
import Logo from "../../../public/assets/logo1.png";
import { montserrat } from "@/styles/fonts";

function KnowUs() {
  return (
    <>
      <main className={styles.main1} id="about">
        <section className={styles.knowUSContainer}>
          <article className={styles.knowUSContainer__logo}>
            <br />
            <Image src={Logo} alt="img logo" width={300} height={100} />
          </article>
          <article className={styles.knowUSContainer__text}>
            <div className={montserrat.className}>
              <h1 className={styles.knowUSContainer__text__h1}>ABOUT US</h1>
              <p className={styles.knowUSContainer__text__p1}>
                Etnia Is a distribution company with over 25 years of
                experience. Distributors for the U.S, South America, Caribbean,
                and many more regions of the world, we are trusted to provide
                professional and top notch product lines to meet our clients
                project needs. With vendor options such as Professional
                lighting, truss systems, Lifters, controllers, staging, and much
                more. We don’t only offer a variety of product lines but we harp
                on service, whether it’s tech support, project recommendations,
                or repairs. Our team is <b className={styles.b}> passionate</b>{" "}
                about the industry and we look forward to not only creating
                <b className={styles.b}> business relationships </b> but to
                continue to build in them for years to come.
              </p>
              {/* <Link href={""}>
                <button
                  type="button"
                  className={styles.knowUSContainer__button}
                >
                  MORE INFO{" "}
                </button>
              </Link> */}
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default KnowUs;
