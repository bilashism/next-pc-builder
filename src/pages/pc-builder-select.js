import RootLayout from "@/components/Layout/RootLayout";
import SingleCategoryProducts from "@/components/UI/SingleCategoryProducts";
import Head from "next/head";

const PcBuilderSelect = ({ products }) => {
  if (!products || products?.length === 0) {
    return <div>No products to display.</div>;
  }
  const currentCategoryName = products[0]?.category || "Category";

  return (
    <>
      <Head>
        <title>Select your component - {currentCategoryName}</title>
      </Head>
      <div>
        <h2 className="text-center text-lg xl:text-2xl py-12">
          <mark>{currentCategoryName}:</mark> {products?.length} items
        </h2>
        <SingleCategoryProducts products={products} pcBuilder />
      </div>
    </>
  );
};

export default PcBuilderSelect;

PcBuilderSelect.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async context => {
  const { query } = context;
  const res = await fetch(`http://localhost:5000/products`);
  const data = await res.json();
  const filteredProducts = [...data].filter(
    product => product.categoryId === query?.category
  );

  return {
    props: {
      products: filteredProducts
    }
  };
};
