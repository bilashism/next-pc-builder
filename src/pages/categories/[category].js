import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const Category = ({ categories }) => {
  console.log(categories);
  return (
    <div>
      <h2 className="">category</h2>
    </div>
  );
};

export default Category;

Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/news");
  const newses = await res.json();

  const paths = newses?.map(news => ({
    params: { category: news.id }
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async context => {
  console.log("context:", context);
  // const res = await fetch("http://localhost:3000/api/news"); // internal API connected with mongoDB
  const res = await fetch("http://localhost:5000/news"); // --> json server
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      categories: data
    },
    revalidate: 10
  };
};
