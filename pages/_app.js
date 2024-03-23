import "@/styles/globals.scss";
import { UserProvider } from "@/context/auth/UserContext";
import Navbar from "@/components/Navbar/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <Navbar></Navbar>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}
