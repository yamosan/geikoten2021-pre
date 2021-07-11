import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "styles/globals.css";
import Layout from "components/layouts";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
