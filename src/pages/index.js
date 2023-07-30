import Head from "next/head";
import RootLayout from "@/components/Layout/RootLayout";
import Banner from "@/components/UI/Banner";

import { useGetCategoriesQuery } from "@/redux/api/api";
import dynamic from "next/dynamic";
import FeaturedProducts from "@/components/UI/FeaturedProducts";
import FeaturedCategories from "@/components/UI/FeaturedCategories";

const HomePage = ({ products, categories }) => {
  // const DynamicBanner = dynamic(() => import("@/components/UI/Banner"), {
  //   loading: () => <h1>Loading...</h1>,
  //   ssr: false
  // });

  return (
    <>
      <Head>
        <title>Next PC Builder - Home</title>
      </Head>
      <Banner />
      <FeaturedProducts products={products} />
      <FeaturedCategories categories={categories} />
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
  const productsRes = await fetch(
    "https://next-pc-builder-api.vercel.app/products"
  );
  const productsData = await productsRes.json();
  const categoriesRes = await fetch(
    "https://next-pc-builder-api.vercel.app/categories"
  );
  const categoriesData = await categoriesRes.json();
  return {
    props: {
      products: getRandomItemsFromArray(productsData, 6),
      categories: categoriesData
    },
    revalidate: 10
  };
};

