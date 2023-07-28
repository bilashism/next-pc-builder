import '@/styles/globals.css'
import NavbarEl from "@/components/Layout/Navbar";
export default function App({ Component, pageProps }) {
  return (
    <>
      <NavbarEl />
      <Component {...pageProps} />
    </>
  );
}
