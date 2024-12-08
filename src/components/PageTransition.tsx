import Layout from "../app/layout";
import "../styles/global.css";
import PageTransition from "../components/PageTransition";

import { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <PageTransition>
        <Component {...pageProps} key={router.route} />
      </PageTransition>
    </Layout>
  );
}
