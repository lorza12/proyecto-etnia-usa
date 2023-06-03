import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { products as produ } from "../../assests/dataProducts";

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = produ.filter((element) => element.id.toString() === id);

  return (
    <>
      <Head>
        <title>Product Detail</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Produ details {id}</h1>
      <p>
        {product.map((item) => (
          <>
            <p key={item.id}>{item.name}</p>
            <Image src={item.image} alt="img" width={200} height={200} />
            <p>{item.description}</p>
          </>
        ))}
      </p>
    </>
  );
};

export default ProductDetailPage;
