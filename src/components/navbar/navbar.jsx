import { useState } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import Link from "next/link";
import styles from "@/styles/NavBar.module.css";
import Image from "next/image";
import Logo from "../../../public/assets/logo1.png";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { MdPermContactCalendar } from "react-icons/md";
import { ImMenu } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { SiWebpack } from "react-icons/si";
import { RiRegisteredFill } from "react-icons/ri";
import { HiOfficeBuilding } from "react-icons/hi";
import { montserrat } from "@/styles/fonts";
<<<<<<< HEAD


const prompt = Prompt({
  subsets: ["latin"],
  weight: "400",
});


=======
>>>>>>> 12cc3edcb8f2b2be4ee161309e21af48c07085c8

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (path) => {
    setIsOpen(false);
    router.push(path);
  };

  return (
    <>
<<<<<<< HEAD
    <main className={montserrat.className}>
    <div className={styles.navBarContainer}>
        <div className={styles.navBarContainer__logoInfo}>
          <div className={styles.navbarContainer__LogoInfo__logo}>
            <Link href={"/"}>
              <Image src={Logo} alt="img logo" width={300} height={120} />
            </Link>
          </div >
          <div className={styles.navBarContainer__options}>
          <div className={styles.navBarContainer__options1}>
          <Link href={"/brands"}>
            <p>FEATURED BRANDS </p>
          </Link>
          <Link href={"/products"}>
            <p>PRODUCTS</p>
          </Link>
          <Link href={"#footer"}>
            <p>CONTACT US</p>
          </Link>
          <Link href={"/brans"}>
            <p>ABOUT US</p>
          </Link>
          </div>
          <div className={styles.navBarContainer__optionsRedes}>
            <GrFacebookOption />
            <BsInstagram />
            <BsTwitter />
          </div>
        </div>
        </div>

        <div className={styles.navBarContainer__option2}>
          <button className={styles.menuButton} onClick={toggleMenu}>
            <p>
              <ImMenu color="#3595f5" size={40} />
            </p>
          </button>
          <div
            className={`${styles.menuContainer} ${isOpen && styles.menuOpen}`}
          >
            <button
              type="button"
              className={styles.butto_cart2}
              onClick={toggleMenu}
            >
              X
            </button>
            <ul className={styles.menuItems}>
              <div className={styles.span}>
                <Link href={"/"}>
                  <li
                    onClick={() => handleItemClick("/")}
                  >
                    {" "}
                    <AiFillHome size={20} /> HOME{" "}
                  </li>
                </Link>
                <span className={styles.span2}>&#8594;</span>
              </div>
              <br />
              <br />
              <div className={styles.span}>
                <Link href={"/about"}>
                  <li
                    className={prompt.className}
                    onClick={() => handleItemClick("/brands")}
                  >
                    <RiRegisteredFill size={20} /> BRANDS
                  </li>
=======
      <main className={montserrat.className}>
        <div className={styles.navBarContainer}>
          <div className={styles.navBarContainer__logoInfo}>
            <div className={styles.navbarContainer__LogoInfo__logo}>
              <Link href={"/"}>
                <Image src={Logo} alt="img logo" width={300} height={120} />
              </Link>
            </div>

            <div className={styles.navBarContainer__options}>
              <div className={styles.navBarContainer__options1}>
                <Link href={"/brands"}>
                  <p>FEATURED BRANDS </p>
>>>>>>> 12cc3edcb8f2b2be4ee161309e21af48c07085c8
                </Link>

                <Link href={"/products"}>
                  <p>PRODUCTS</p>
                </Link>

                <Link href={"#footer"}>
                  <p>CONTACT US</p>
                </Link>
<<<<<<< HEAD
                <span className={styles.span2}>&#8594;</span>
              </div>
              <br />
              <br />
              <div className={styles.span}>
                <Link href={"/brands"}>
                  <li
                    onClick={() => handleItemClick("brands")}
                  >
                    <HiOfficeBuilding size={20} /> ABOUT US
                  </li>
=======

                <Link href={"/brans"}>
                  <p>ABOUT US</p>
>>>>>>> 12cc3edcb8f2b2be4ee161309e21af48c07085c8
                </Link>
              </div>

              <div className={styles.navBarContainer__optionsRedes}>
                <GrFacebookOption />
                <BsInstagram />
                <BsTwitter />
              </div>
            </div>
          </div>

          <div className={styles.navBarContainer__option2}>
            <button className={styles.menuButton} onClick={toggleMenu}>
              <p>
                <ImMenu color="#3595f5" size={40} />
              </p>
            </button>
            <div
              className={`${styles.menuContainer} ${isOpen && styles.menuOpen}`}
            >
              <button
                type="button"
                className={styles.butto_cart2}
                onClick={toggleMenu}
              >
                X
              </button>

              <ul className={styles.menuItems}>
                <div className={styles.span}>
                  <Link href={"/"}>
                    <li onClick={() => handleItemClick("/")}>
                      {" "}
                      <AiFillHome size={20} /> HOME{" "}
                    </li>
                  </Link>
                  <span className={styles.span2}>&#8594;</span>
                </div>

                <br />
                <br />

                <div className={styles.span}>
                  <Link href={"/about"}>
                    <li
                      className={montserrat.className}
                      onClick={() => handleItemClick("/brands")}
                    >
                      <RiRegisteredFill size={20} /> BRANDS
                    </li>
                  </Link>
                  <span className={styles.span2}>&#8594;</span>
                </div>

                <br />
                <br />

                <div className={styles.span}>
                  <Link href={"/products"}>
                    <li
                      className={montserrat.className}
                      onClick={() => handleItemClick("products")}
                    >
                      {" "}
                      <SiWebpack size={20} /> PRODUCTS
                    </li>
                  </Link>
                  <span className={styles.span2}>&#8594;</span>
                </div>

                <br />
                <br />

                <div className={styles.span}>
                  <Link href={"#footer"}>
                    <li className={montserrat.className}>
                      <MdPermContactCalendar size={20} /> CONTACT US
                    </li>
                  </Link>
                  <span className={styles.span2}>&#8594;</span>
                </div>

                <br />
                <br />

                <div className={styles.span}>
                  <Link href={"/brands"}>
                    <li onClick={() => handleItemClick("brands")}>
                      <HiOfficeBuilding size={20} /> ABOUT US
                    </li>
                  </Link>
                  <span className={styles.span2}>&#8594;</span>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default NavBar;
