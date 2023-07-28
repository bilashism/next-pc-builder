import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

const RootLayout = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />

      {children}

      <Footer />
    </>
  );
};
export default RootLayout;
