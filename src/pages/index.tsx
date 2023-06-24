import Head from "next/head";
import Banner from "../components/banner/banner";
import KnowUs from "../components/knowUs/knowUs";
import Products from "../components/products/products1";
import Brands from "@/components/brands/Brands";

function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Brands />
      <Products />
      <KnowUs />
    </>
  );
}

export default Home;
