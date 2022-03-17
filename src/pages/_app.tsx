import type { AppProps } from "next/app";
import { Fragment } from "react";
// libs
import { config as fontawesomeConfig } from "@fortawesome/fontawesome-svg-core";
// components
import Main from "../components/layout/Main";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
// hooks
// store
// utils & animation
import "../../styles/tailwind.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
// import Layout from "../components/layout/Layout";

fontawesomeConfig.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Layout>
      </Layout> */}
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
