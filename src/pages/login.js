import Head from "next/head";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import RootLayout from "@/components/Layout/RootLayout";

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Next PC Builder - Login</title>
      </Head>
      <section className="py-12 min-h-[60vh] grid items-center">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900/90 text-white rounded-lg px-12 py-24 max-w-xl mx-auto">
            <h3 className="text-center pb-8 text-xl">
              Login with your Google account with one click
            </h3>
            <div className="text-center flex justify-center items-center w-full h-full">
              <button
                type="button"
                className="inline-flex justify-center items-center">
                <FcGoogle className="w-12 h-12" />
              </button>
            </div>
            {/* <hr /> */}
            {/* <form>
          <label htmlFor="">Your Email</label>
          <input type="email" />
          <label htmlFor="">Your Password</label>
          <input type="password" />
          <button type="button">Login</button>
        </form> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
