import Head from "next/head";
import Banner from "../components/banner/banner";
import KnowUs from "../components/knowUs/knowUs";
import Products from "../components/products/products1";
import Brands from "@/components/brands/Brands";

function Home() {
  return (
    <>
      <Head>
        <title>Etniapro</title>
        <meta
          name="description"
          content="We are a company dedicated to the import and export of high quality products for the world of Audio, Video, Lighting in the sector of shows, live and theatrical events."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Banner />
      <Brands />
      <Products />
      <KnowUs />
    </>
  );
}

export default Home;
