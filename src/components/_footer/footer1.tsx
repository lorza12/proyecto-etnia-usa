import styles from "@/styles/Footer.module.css";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaCopyright } from "react-icons/fa";
import { TbMapSearch } from "react-icons/tb";
import Image from "next/image";
import Logo from "../../../public/assets/logo-indcomer.png";
import { montserrat } from "@/styles/fonts";

function Footer() {
  const googleMapsUrl =
    "https://www.google.com/maps/place/10400+W+McNab+Rd,+Tamarac,+FL+33321,+EE.+UU./@26.2075532,-80.2887334,17z/data=!4m6!3m5!1s0x88d90f42a34a120f:0xaa4da0f6e6cf93bb!8m2!3d26.2077165!4d-80.2888942!16s%2Fg%2F11c5jmn9__?hl=es&entry=ttu";

  const facebookUrl = "https://es-la.facebook.com/";

  return (
    <>
      <main className={styles.footerContainer} id="footer">
        <section className={montserrat.className}>
          <section className={styles.footerContainer__section1}>
            <article className={styles.footerContainer__section1__inf}>
              <h1>E-MAIL</h1>
              <p>info@etniapro.com</p>
              <br />
              <h1>PHONE NUMBER</h1>
              <p>305 608 3596</p>
            </article>
            <article className={styles.footerContainer__section1__hours}>
              <h1>ATTENTION SCHEDULE</h1>
              <br />
              <div
                className={styles.footerContainer__section1__hours__sections}
              >
                <div className={styles.divs__interval}>
                  <p>Monday-Friday</p>
                  <p>9:00 a.m - 5:00 p.m</p>
                </div>
              </div>
            </article>
            <article className={styles.footerContainer__section1__networks}>
              <h1>FOLLOW US</h1>
              <div className={styles.div__networks}>
                <a href={facebookUrl} target="_blank" rel="iconFacebook">
                  <BsFacebook fontSize={30} />
                </a>
                <br />
                <BsInstagram fontSize={30} />
                <br />
                <BsTwitter fontSize={30} />
              </div>
            </article>
          </section>
          <section className={styles.footerContainer__section2}>
            <article>
              <p>
                <FaCopyright /> All rights reserved 2023
              </p>
            </article>
            <article>
              <p>political EtniaA</p>
            </article>
          </section>
        </section>
      </main>
    </>
  );
}

export default Footer;
