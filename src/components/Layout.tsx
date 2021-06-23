import type { VFC, ReactNode } from "react";
import Head from "next/head";
import Header from "components/shared/Header";
import Footer from "./shared/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: VFC<Props> = ({ children, title = "This is the default title" }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <main className="bg-bg min-h-screen pt-12">{children}</main>
    <Footer />
  </>
);

export default Layout;
