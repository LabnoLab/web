import "../styles/globals.css";
import { Open_Sans } from "next/font/google";
import type { AppProps } from "next/app";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-open-sans"
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={openSans.variable}>
      <Component {...pageProps} />
    </main>
  );
}
