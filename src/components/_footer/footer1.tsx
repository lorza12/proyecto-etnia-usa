import styles from "@/styles/Footer.module.css";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaCopyright } from "react-icons/fa";
import { TbMapSearch } from "react-icons/tb";
import { montserrat } from "@/styles/fonts";

function Footer() {
  const googleMapsUrl =
    "https://www.google.com/maps/place/4600+36th+St+d,+Orlando,+FL+32811,+EE.+UU./@28.5033309,-81.4477134,15.25z/data=!4m5!3m4!1s0x88e7794dfea3bd53:0x3360aa92cfe49f31!8m2!3d28.5019636!4d-81.439199?entry=ttu";

  const facebookUrl = "https://es-la.facebook.com/";

  return (
    <>
      <main className={styles.footerContainer}>
        <section className={montserrat.className}>
          <section className={styles.footerContainer__section1}>
            <article className={styles.footerContainer__section1__inf}>
              <h1>SHOW ROOM LOCATION</h1>
              <p>4600 36th St d, Orlando, FL 32811, EE. UU.</p>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <TbMapSearch fontSize={19} /> &nbsp;
                <span className={styles.subrayado}>See map</span>
              </a>
              <br />
              <br />
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
                {/* <a href={facebookUrl} target="_blank" rel="iconFacebook"> */}
                <BsFacebook fontSize={30} />

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
