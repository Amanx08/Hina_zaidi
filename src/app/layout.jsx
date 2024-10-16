import localFont from "next/font/local";
import "./globals.css";
// import "@/scss/style.scss"
import '@fortawesome/fontawesome-svg-core/styles.css';

import Script from "next/script";
import Header from "@/component/main-layout/Header";
import Footer from "@/component/main-layout/Footer";
import TopButton from "@/component/main-layout/TopButton";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Heena-Zaidi",
  description: "Heena-Zaidi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="page_wrapper">
          <TopButton />

          <Header />
          {children}
          <Footer />
        </div>

        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/slick.min.js" strategy="beforeInteractive" />
        <Script src="/js/popper.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap-dropdown-ml-hack.min.js" strategy="beforeInteractive" />
        <Script src="/js/magnific-popup.min.js" strategy="beforeInteractive" />
        <Script src="/js/appear.min.js" strategy="beforeInteractive" />
        <Script src="/js/odometer.min.js" strategy="beforeInteractive" />
        <Script src="/js/main.js" strategy="lazyOnload" />

      </body>

    </html>
  );
}
