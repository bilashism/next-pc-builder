import Head from "next/head";
import RootLayout from "@/components/Layout/RootLayout";
import Banner from "@/components/UI/Banner";

import { useGetCategoriesQuery } from "@/redux/api/api";
import dynamic from "next/dynamic";
import FeaturedProducts from "@/components/UI/FeaturedProducts";

const HomePage = ({ products }) => {
  // const DynamicBanner = dynamic(() => import("@/components/UI/Banner"), {
  //   loading: () => <h1>Loading...</h1>,
  //   ssr: false
  // });

  return (
    <>
      <Head>
        <title>PH-News Portal</title>
      </Head>
      <Banner />
      <FeaturedProducts products={products} />
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export function getRandomItemsFromArray(arr, count) {
  const shuffledArray = arr.sort(() => 0.5 - Math.random());
  return shuffledArray.slice(0, count);
}
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products"); // --> server
  const data = await res.json();
  return {
    props: {
      products: getRandomItemsFromArray(data, 6)
    },
    revalidate: 10
  };
};


// for server side rendering (SSR) with json-server data
/* export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/news");
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      allNews: data,
    }
  };
}; */