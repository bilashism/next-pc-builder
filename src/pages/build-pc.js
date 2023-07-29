/* eslint-disable react/no-unescaped-entities */

import Head from "next/head";
import RootLayout from "@/components/Layout/RootLayout";
const ProfilePage = () => {
  return (
    <div className="text-center">
      <Head>
        <title>Let's build your next PC</title>
      </Head>
      <h1>Let's build your next PC</h1>
    </div>
  );
};

export default ProfilePage;

ProfilePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
