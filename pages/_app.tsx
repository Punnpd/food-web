import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { Liff } from "@line/liff";
import { useState, useEffect } from "react";
import localFont from "@next/font/local";
import dayjs from "dayjs";
import "dayjs/locale/th";

dayjs.locale("Asia/Bangkok");

const beVietnam = localFont({
  src: [
    // 100 – Thin
    // 200 – Extra Light (Ultra Light)
    // 300 – Light
    // 400 – Normal
    // 500 – Medium
    // 600 – Semi Bold (Demi Bold)
    // 700 – Bold
    // 800 – Extra Bold (Ultra Bold)
    // 900 – Black (Heavy)
    {
      path: "../fonts/be-vietnam/BeVietnam-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/be-vietnam/BeVietnam-Italic.woff",
      weight: "400",
      style: "italic",
    },
    // {
    //   path: '../fonts/be-vietnam/BeVietnam-Thin.woff',
    //   weight: '100',
    //   style: 'normal'
    // },
    // {
    //   path: '../fonts/be-vietnam/BeVietnam-ThinItalic.woff',
    //   weight: '100',
    //   style: 'italic'
    // },
    // {
    //   path: '../fonts/be-vietnam/BeVietnam-Light.woff',
    //   weight: '300',
    //   style: 'normal'
    // },
    // {
    //   path: '../fonts/be-vietnam/BeVietnam-LightItalic.woff',
    //   weight: '300',
    //   style: 'italic'
    // },
    {
      path: "../fonts/be-vietnam/BeVietnam-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/be-vietnam/BeVietnam-MediumItalic.woff",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/be-vietnam/BeVietnam-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/be-vietnam/BeVietnam-SemiBoldItalic.woff",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/be-vietnam/BeVietnam-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/be-vietnam/BeVietnam-BoldItalic.woff",
      weight: "700",
      style: "italic",
    },
    // {
    //   path: '../fonts/be-vietnam/BeVietnam-ExtraBold.woff',
    //   weight: '800',
    //   style: 'normal'
    // },
    // {
    //   path: '../fonts/be-vietnam/BeVietnam-ExtraBoldItalic.woff',
    //   weight: '800',
    //   style: 'italic'
    // }
  ],
  variable: "--font-be-vietnam",
});

function MyApp({ Component, pageProps }: AppProps) {
  const [liffObject, setLiffObject] = useState<Liff | null>(null);
  const [liffError, setLiffError] = useState<string | null>(null);

  // Execute liff.init() when the app is initialized
  useEffect(() => {
    // to avoid `window is not defined` error
    import("@line/liff")
      .then((liff) => liff.default)
      .then((liff) => {
        console.log("LIFF init...");
        liff
          .init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID! })
          .then(() => {
            console.log("LIFF init succeeded.");
            setLiffObject(liff);
            if (!liff.isLoggedIn()) {
              liff.login();
            }
          })
          .catch((error: Error) => {
            console.log("LIFF init failed.");
            setLiffError(error.toString());
          });
      });
  }, []);

  // Provide `liff` object and `liffError` object
  // to page component as property
  pageProps.liff = liffObject;
  pageProps.liffError = liffError;
  return (
    <main className={`${beVietnam.variable} font-sans`}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      {/* {console.log(beVietnam.variable)} */}
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
