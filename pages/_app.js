import Layout from '../components/layout';
import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import { useEffect } from 'react';
import { AnimatePresence} from "framer-motion"

function MyApp({ Component, pageProps ,router  }) {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);
  return(
    <ThemeProvider enableSystem={true} attribute="class">
    <Layout>
    <AnimatePresence mode="wait" initial={false}>
    <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
    </Layout>
    </ThemeProvider>

  ) 
}

export default MyApp
