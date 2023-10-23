import Head from "next/head";
import Banner from "../components/banner/banner";
import KnowUs from "../components/knowUs/knowUs";
import Products from "../components/products/products1";
import Brands from "@/components/brands/Brands";
import Search from "@/components/searchComponent/search";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

function Home({ products }) {
  return (
    <>
      <Head>
        <title>Etniapro</title>
        <meta
          name="description"
          content="We are a company dedicated to the import and export of high quality products for the world of Audio, Video, Lighting in the sector of shows, live and theatrical events."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoIcon1.ico" />
      </Head>
      <Search />
      <Banner />
      <Brands />
      <Products products={products} />
      <KnowUs />
    </>
  );
}

export default Home;

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: "https://etniapro-admin-6813ee4430db.herokuapp.com/graphql",
    cache: new InMemoryCache({
      addTypename: false,
      resultCaching: false,
    }),
  });

  const { data } = await client.query({
    query: gql`
      query getMainProduct {
        homeProducts {
          data {
            attributes {
              name
              tags
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      products: data?.homeProducts?.data,
    },
  };
}
