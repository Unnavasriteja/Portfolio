import Layout from "../app/layout";
import "../styles/global.css";
import PageTransition from "../components/PageTransition";

export default function App({ Component, pageProps, router }: any) {
  return (
    <Layout>
      <PageTransition>
        <Component {...pageProps} key={router.route} />
      </PageTransition>
    </Layout>
  );
}
