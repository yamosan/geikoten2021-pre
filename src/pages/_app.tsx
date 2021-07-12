import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "components/layouts";

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

export default App;
