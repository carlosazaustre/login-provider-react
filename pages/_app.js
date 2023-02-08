import { LoginProvider } from "../features/login/providers/LoginProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <LoginProvider>
      <Component {...pageProps} />
    </LoginProvider>
  );
}

export default MyApp;
