import "@/styles/globals.scss";
import { Navbar } from "@/components";
import Footer from "@/components/Footer/Footer"; // Import Footer component

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
