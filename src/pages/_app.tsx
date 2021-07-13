import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "components/layouts";
import useMedia from "hooks/useMediaQuery";

const App = ({ Component, pageProps, router }: AppProps) => {
  const isWide = useMedia("(min-width: 640px)");

  // FIXME: hydration error
  return isWide ? (
    <div className="w-screen h-screen bg-primary flex justify-center items-center">
      <p className="font-bold text-white text-3xl" suppressHydrationWarning>
        スマートフォンでご覧ください
        <span role="img" aria-label="cry">
          😢
        </span>
      </p>
    </div>
  ) : (
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
