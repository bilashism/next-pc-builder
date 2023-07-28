import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <FcGoogle />
          <BsGithub />
        </div>
        <hr />
        <form>
          <label htmlFor="">Your Email</label>
          <input type="email" />
          <label htmlFor="">Your Password</label>
          <input type="password" />
          <button type="button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
