import { useState } from "react";
import { useRouter } from "next/router";
import { Prompt } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, {
  Pagination,
  Autoplay,
} from "swiper";
import Link from "next/link";
import styles from "@/styles/NavBar.module.css";
import Image from "next/image";
import Logo from "../../../public/assets/logo1.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { ImMenu } from "react-icons/im";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { SiWebpack } from "react-icons/si";
import { RiRegisteredFill } from "react-icons/ri";
import { HiOfficeBuilding } from "react-icons/hi";

SwiperCore.use([Pagination, Autoplay]);

const prompt = Prompt({
  subsets: ["latin"],
  weight: "400",
});



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
    <main className={prompt.className}>
    <div className={styles.navBarContainer}>
        <div className={styles.navBarContainer__logoInfo}>
          <div className={styles.navbarContainer__LogoInfo__logo}>
            <Link href={"/"}>
              <Image src={Logo} alt="img logo" width={300} height={120} />
            </Link>
          </div >
          <div className={styles.navBarContainer__options}>
          <div className={styles.navBarContainer__options1}>
          <Link href={"/"}>
            <p>Inicio</p>
          </Link>
          <Link href={"/products"}>
            <p>Productos</p>
          </Link>
          <Link href={"/about"}>
            <p>Compañia</p>
          </Link>
          <Link href={"/brans"}>
            <p>Marcas</p>
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
              <ImMenu color="#ffffff" size={40} />
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
                    className={prompt.className}
                    onClick={() => handleItemClick("/")}
                  >
                    {" "}
                    <AiFillHome size={20} /> Inicio{" "}
                  </li>
                </Link>
                <span className={styles.span2}>&#8594;</span>
              </div>
              <br />
              <br />
              <div className={styles.span}>
                <Link href={"products"}>
                  <li
                    className={prompt.className}
                    onClick={() => handleItemClick("products")}
                  >
                    {" "}
                    <SiWebpack size={20} /> Productos
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
                    onClick={() => handleItemClick("about")}
                  >
                    <HiOfficeBuilding size={20} /> Compañia
                  </li>
                </Link>
                <span className={styles.span2}>&#8594;</span>
              </div>
              <br />
              <br />
              <div className={styles.span}>
                <Link href={"/brands"}>
                  <li
                    className={prompt.className}
                    onClick={() => handleItemClick("brands")}
                  >
                    <RiRegisteredFill size={20} /> Marcas
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
