import { ProviderAlert } from "@hooks/useAlert";
import MainLayout from "@layout/MainLayout";
import "@styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <ProviderAlert>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ProviderAlert>
  );
}

export default MyApp;
