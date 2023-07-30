import RootLayout from "@/components/Layout/RootLayout";
import SingleCategoryProducts from "@/components/UI/SingleCategoryProducts";
import Head from "next/head";
import { useRouter } from "next/router";

const Category = ({ products }) => {
  const router = useRouter();

  if (!products || products?.length === 0) {
    return <div>No products to display.</div>;
  }
  const currentCategoryName = products[0]?.category || "Category";

  return (
    <>
      <Head>
        <title>Next PC Builder - {currentCategoryName}</title>
      </Head>
      <div>
        <h2 className="text-center text-lg xl:text-2xl py-12">
          <mark>{products[0].category}:</mark> {products?.length} items
        </h2>
        <SingleCategoryProducts products={products} />
      </div>
    </>
  );
};

export default Category;

Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/db/?name=categories");
  const categories = await res.json();
  const paths = categories?.data?.map(category => ({
    params: { category: category.id }
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params: { category } }) => {
  const res = await fetch(`http://localhost:3000/api/db/?name=products`);
  const data = await res.json();
  const filtered = data?.data.filter(
    product => product.categoryId === category
  );
  return {
    props: {
      products: filtered
    }
    // revalidate: 10
  };
};
