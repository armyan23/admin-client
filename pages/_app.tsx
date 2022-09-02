import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import "antd/dist/antd.css";
import Head from "next/head";


const MyApp = ({ Component, pageProps }: any) => {

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: any) => page)
  console.log(pageProps)

  return getLayout(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
