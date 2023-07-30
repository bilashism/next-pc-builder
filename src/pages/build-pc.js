/* eslint-disable react/no-unescaped-entities */

import Head from "next/head";
import RootLayout from "@/components/Layout/RootLayout";
import Link from "next/link";
import Image from "next/image";
const ProfilePage = ({ categories }) => {
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
          <div className="grid gap-6 md:grid-cols-1 xl:grid-cols-1">
            {categories
              ?.filter(category => category?.id !== "others")
              .map((category, idx) => (
                <div
                  key={idx + 1}
                  className="flex justify-between items-center even:bg-slate-300 rounded-md p-3 border border-slate-300">
                  <div className="">
                    <h2 className="text-center">{category?.name}</h2>
                    <Image
                      className="w-28 h-28 object-cover mx-auto rounded-md"
                      src={category?.image}
                      width={112}
                      height={112}
                      alt={category?.name}
                    />
                  </div>
                  <div className="">
                    <Link
                      href={`/pc-builder-select?category=${category?.id}`}
                      className="inline-flex relative isolate z-0 flex-col gap-3 border border-purple-600 rounded-md px-4 py-3 hover:text-white hover:bg-purple-600 transition-colors">
                      Select
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          <div className="text-center py-12">
            <button
              type="button"
              disabled
              className="inline-flex justify-center items-center text-2xl text-white bg-purple-600 px-6 py-3 rounded-md shadow-md">
              Complete build
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;

ProfilePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const categoriesRes = await fetch("http://localhost:5000/categories");
  const categoriesData = await categoriesRes.json();
  return {
    props: {
      categories: categoriesData
    },
    revalidate: 10
  };
};