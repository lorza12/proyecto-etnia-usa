import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper";
import styles from "@/styles/Banner.module.css";
import Image from "next/image";
import img1 from "../../../public/assets/banner-img/1.png";
import img2 from "../../../public/assets/banner-img/11.png";
import img3 from "../../../public/assets/banner-img/12.png";
import img4 from "../../../public/assets/banner-img/14.png";
import img5 from "../../../public/assets/banner-img/18.png";
import img6 from "../../../public/assets/banner-img/21.png";
import img7 from "../../../public/assets/banner-img/2.png";
import img8 from "../../../public/assets/banner-img/11.png";
import img9 from "../../../public/assets/banner-img/5.png";
import img10 from "../../../public/assets/banner-img/6.png";
import img11 from "../../../public/assets/banner-img/1.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

function Banner() {
  return (
    <>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerContainer__banner}>
          <div className={styles.navBarContainer__banner}>
            <Swiper
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className={styles.navBarContainer__banner__mySwiper}
            >
              <SwiperSlide
                key={1}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <div className={styles.sssss}>
                  <Image
                    src={img1}
                    alt="img"
                    width={500}
                    height={800}
                    priority={true}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide
                key={2}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <Image
                  src={img2}
                  alt="img"
                  width={500}
                  height={800}
                  priority={true}
                />
              </SwiperSlide>
              <SwiperSlide
                key={3}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <Image
                  src={img3}
                  alt="img"
                  width={500}
                  height={800}
                  priority={true}
                />
              </SwiperSlide>
              <SwiperSlide
                key={4}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <Image
                  src={img4}
                  alt="img"
                  width={500}
                  height={800}
                  priority={true}
                />
              </SwiperSlide>
              <SwiperSlide
                key={5}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <Image
                  src={img5}
                  alt="img"
                  width={500}
                  height={800}
                  priority={true}
                />
              </SwiperSlide>
              <SwiperSlide
                key={6}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <Image
                  src={img6}
                  alt="img"
                  width={500}
                  height={800}
                  priority={true}
                />
              </SwiperSlide>
              <SwiperSlide
                key={7}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <Image
                  src={img7}
                  alt="img"
                  width={500}
                  height={800}
                  priority={true}
                />
              </SwiperSlide>
              <SwiperSlide
                key={8}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <Image
                  src={img8}
                  alt="img"
                  width={500}
                  height={800}
                  priority={true}
                />
              </SwiperSlide>
              <SwiperSlide
                key={9}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <Image
                  src={img9}
                  alt="img"
                  width={500}
                  height={800}
                  priority={true}
                />
              </SwiperSlide>
              <SwiperSlide
                key={10}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <Image
                  src={img10}
                  alt="img"
                  width={500}
                  height={800}
                  priority={true}
                />
              </SwiperSlide>
              <SwiperSlide
                key={11}
                className={styles.navBarContainer__banner__SwiperSlide}
              >
                <Image
                  src={img11}
                  alt="img"
                  width={500}
                  height={800}
                  priority={true}
                />
              </SwiperSlide>
            </Swiper>
            {/*
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Pagination]}
            className={styles.bannerContainer__banner__mySwiper2}
          >
            <SwiperSlide
              key={1}
              className={styles.bannerContainer__banner__SwiperSlide}
            >
              <Image
                src={img1}
                alt="img logo"
                width={500}
                height={800}
                priority={true}
              />
            </SwiperSlide>
            <SwiperSlide
              key={2}
              className={styles.bannerContainer__banner__SwiperSlide}
            >
              <Image
                src={img2}
                alt="img logo"
                width={500}
                height={800}
                priority={true}
              />
            </SwiperSlide>
            <SwiperSlide
              key={3}
              className={styles.bannerContainer__banner__SwiperSlide}
            >
              <Image
                src={img3}
                alt="img logo"
                width={500}
                height={800}
                priority={true}
              />
            </SwiperSlide>
            <SwiperSlide
              key={4}
              className={styles.bannerContainer__banner__SwiperSlide}
            >
              <Image
                src={img4}
                alt="img logo"
                width={500}
                height={800}
                priority={true}
              />
            </SwiperSlide>
            <SwiperSlide
              key={6}
              className={styles.bannerContainer__banner__SwiperSlide}
            >
              <Image
                src={img6}
                alt="img logo"
                width={500}
                height={800}
                priority={true}
              />
            </SwiperSlide>
          </Swiper> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
