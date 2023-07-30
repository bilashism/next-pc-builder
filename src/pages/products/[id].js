import RootLayout from "@/components/Layout/RootLayout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleProduct = ({ product }) => {
  const {
    id,
    categoryId,
    image,
    productName,
    category,
    status,
    price,
    description,
    keyFeatures,
    individualRating,
    averageRating,
    reviews
  } = product;

  return (
    <>
      <Head>
        <title>
          {productName} - {description} - rated: {averageRating}
        </title>
      </Head>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid xl:grid-cols-12 justify-between items-center gap-8">
            <div className="xl:col-span-5 relative flex w-full max-w-xs xl:max-w-xl mx-auto flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
              <div className="relative mx-3 mt-3 flex overflow-hidden rounded-xl">
                <Image
                  src={image}
                  alt={productName}
                  width={520}
                  height={520}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                  {status}
                </span>
              </div>
              <div className="mt-4 px-5 pb-5 flex flex-col justify-between flex-grow">
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-bold text-slate-900">
                      ${price}
                    </span>
                    {/* <span className="text-sm text-slate-900 line-through">$699</span> */}
                  </p>
                  <div className="flex items-center">
                    {/* <svg
              aria-hidden="true"
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg> */}
                    <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                      {averageRating}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  disabled={status === "Out of stock"}
                  className="capitalize flex justify-center items-center text-center bg-slate-800 p-4 rounded-md text-white hover:text-blue-500 hover:bg-slate-700 transition-colors">
                  add to cart
                </button>
              </div>
            </div>
            <div className="xl:col-span-7 flex flex-col gap-6">
              <h2 className="capitalize text-lg xl:text-3xl">
                {productName}{" "}
                <span className="lowercase text-base text-blue-500">
                  (rated {individualRating})
                </span>
              </h2>
              <p className="relative isolate z-0 pb-8">
                <span className="p-2 rounded-full bg-blue-500 text-center text-sm font-medium text-white">
                  {category}
                </span>
              </p>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">Description:</h3>
                <p className="text-base">{description}</p>
              </div>
              {keyFeatures ? (
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold pb-3">Key Features</h2>
                  <p className="">
                    Brand:{" "}
                    <span className="font-bold">{keyFeatures?.brand}</span>
                  </p>
                  <p className="">
                    Model:{" "}
                    <span className="font-bold">{keyFeatures?.model}</span>
                  </p>
                  <div className="flex flex-wrap xl:flex-nowrap gap-5">
                    Specification:{" "}
                    <ul className="flex flex-col gap-2 list-disc pl-2">
                      {keyFeatures?.specification
                        .split(",")
                        .map((listItem, idx) => (
                          <li key={idx + 1}>{listItem}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              ) : (
                false
              )}
            </div>
            {reviews && reviews?.length >= 1 ? (
              <div className="col-span-full">
                <h2 className="font-bold py-8">
                  Total reviews:{" "}
                  <span className="text-blue-500">{reviews?.length}</span>
                </h2>
                <div className="grid gap-6 ">
                  {reviews.map((review, reviewIdx) => (
                    <div
                      key={`review-${reviewIdx + 1}`}
                      className="bg-slate-300/75 rounded-md p-3 shadow-md">
                      <blockquote className="italic">
                        {review?.comment}
                      </blockquote>
                      <p className="">
                        Rating:{" "}
                        <span className="text-blue-500">{review?.rating}</span>{" "}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              false
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;

SingleProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/db?name=products");
  const products = await res.json();

  const paths = products?.data?.map(product => ({
    params: { id: product.id }
  }));

  return { paths, fallback: false };
};
export const getStaticProps = async context => {
  const productsRes = await fetch(
    `http://localhost:3000/api/db?name=products&id=${context.params.id}`
  );
  const productsData = await productsRes.json();
  // console.log(productsData);
  return {
    props: {
      product: productsData?.data
    },
    revalidate: 10
  };
};
