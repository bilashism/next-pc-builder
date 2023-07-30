import store from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import { Provider } from "react-redux";

// export default function App({ Component, pageProps }) {
//   const getLayout = Component.getLayout || (page => page);

//   return (
//     <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
//   );
// }

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  const getLayout = Component.getLayout || (page => page);
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </Provider>
  );
}