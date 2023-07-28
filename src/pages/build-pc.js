import { BiSolidUserCircle } from "react-icons/bi";

import Head from "next/head";
import RootLayout from "@/components/Layout/RootLayout";
const ProfilePage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>Next Profile</title>
      </Head>
      <h1>User Profile</h1>
      <BiSolidUserCircle />
    </div>
  );
};

export default ProfilePage;

ProfilePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
