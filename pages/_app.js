import "@/styles/globals.scss";
import { Navbar } from "@/components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
