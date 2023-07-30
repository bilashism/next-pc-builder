/* eslint-disable react/no-unescaped-entities */

import Head from "next/head";
import RootLayout from "@/components/Layout/RootLayout";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import FeaturedProductCard from "@/components/UI/FeaturedProductCard";
import { toast, Toaster } from "react-hot-toast";

const PcBuilderPage = ({ categories }) => {
  const pcBuilderState = useSelector(state => state.pcBuilder);
  // console.log(pcBuilderState);
  const notify = () =>
    toast.success("Your new PC have been build successfully! 🎉✨");

  return (
    <>
      <Head>
        <title>Let's build your next PC - Next PC Builder</title>
      </Head>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="pb-8">
            <h1 className="text-center text-2xl ">Let's build your next PC</h1>
          </div>
          <div className="grid gap-12 md:grid-cols-1 xl:grid-cols-1">
            {categories
              ?.filter(category => category?.id !== "others")
              ?.map((category, idx) => (
                <div
                  key={idx + 1}
                  className="flex flex-col xl:flex-row gap-8 justify-center xl:justify-between items-center even:bg-slate-300 rounded-md p-3 border border-slate-300">
                  <div className="">
                    <h2 className="text-center text-2xl pb-4">
                      {category?.name}
                    </h2>
                    <Image
                      className="w-40 xl:w-80 h-40 xl:h-80 object-cover mx-auto rounded-md grayscale"
                      src={category?.image}
                      width={320}
                      height={320}
                      alt={category?.name}
                    />
                  </div>
                  <div className="flex flex-col gap-4 justify-center items-center xl:max-w-xs flex-grow w-full">
                    {pcBuilderState[category?.id] ? (
                      <FeaturedProductCard
                        product={pcBuilderState[category?.id]}
                      />
                    ) : (
                      false
                    )}
                    <Link
                      href={`/pc-builder-select?category=${category?.id}`}
                      className="flex w-full max-w-[80%] justify-center text-center items-center relative isolate z-0 flex-col gap-3 border border-purple-600 rounded-md px-4 py-3 hover:text-white hover:bg-purple-600 transition-colors">
                      {pcBuilderState[category?.id] ? "Change" : "Select"}{" "}
                      {category?.name}
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          <div className="text-center py-12">
            <button
              type="button"
              disabled={!pcBuilderState?.isBuildCompleted}
              onClick={notify}
              className="inline-flex justify-center items-center text-2xl text-white bg-purple-600 disabled:bg-purple-300 px-6 py-3 rounded-md shadow-md">
              Complete build
            </button>
          </div>
        </div>
      </section>
      <Toaster />
    </>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const categoriesRes = await fetch(
    "http://localhost:3000/api/db?name=categories"
  );
  const categoriesData = await categoriesRes.json();
  return {
    props: {
      categories: categoriesData?.data
    },
    revalidate: 10
  };
};

