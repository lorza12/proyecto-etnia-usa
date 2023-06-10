import Head from "next/head";
import styles from "@/styles/Brands.module.css";
import Image from "next/image";
import { Prompt, Lato } from "next/font/google";
import brand1 from "../../../public/assets/descargammmmm-removebg-preview.png";
import brand2 from "../../../public/assets/descarga-removebg-preview.png";
import brand3 from "../../../public/assets/descarga__1_-removebg-preview.png";
import Link from "next/link";
import { products as produ } from "../../assets/dataProducts";
import { useState } from "react";

const prompt = Prompt({
  subsets: ["latin"],
  weight: "400",
});
const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

function BrandsAll() {
  const filterBrands = (brand) => {
    const lengthBrands = produ.filter((product) => {
      return product.brand === brand;
    });
    return lengthBrands.length;
  };
  const lengthWokpro = filterBrands("workpro");
  const lengthEquipson = filterBrands("equipson");
  const lengthLightshark = filterBrands("lightshark");

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.bransAllContainer}>
        <section className={styles.bransALlContainer__title}>
          <h1 className={lato.className}>ASSOCIATED BRANDS</h1>
        </section>
        <section className={styles.bransAllContainer__brands}>
          <article className={styles.bransAllContainer__brand1}>
            <div className={styles.bransAllContainer__brand__circle}>
              <Link href={`/brands/workpro`}>
                <Image src={brand1} alt="brand1" width={200} height={150} />
              </Link>
              <p>{lengthWokpro} </p>
            </div>
          </article>
          <article className={styles.bransAllContainer__brand2}>
            <div className={styles.bransAllContainer__brand__circle}>
              <Link href={`/brands/lightshark`}>
                <Image src={brand2} alt="brand2" width={200} height={150} />
              </Link>
              <p>{lengthLightshark}</p>
            </div>
          </article>
          <article className={styles.bransAllContainer__brand3}>
            <div className={styles.bransAllContainer__brand__circle}>
              <Link href={`/brands/equipson`}>
                <Image src={brand3} alt="brand3" width={200} height={150} />
              </Link>
              <p>{lengthEquipson}</p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default BrandsAll;
