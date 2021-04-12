import Page from "../components/Page";
import ShopProvider from "../context/shopContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ShopProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ShopProvider>
  );
}

export default MyApp;
