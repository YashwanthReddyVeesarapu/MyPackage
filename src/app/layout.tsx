"use client";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";

import { AuthContextProvider } from "../components/context/AuthContext";

// const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

import { store } from "@/redux/store";

import MainLayout from "@/layouts/MainLayout";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { Provider } from "react-redux";
import Head from "next/head";

// export const metadata: Metadata = {
//   title: "MyPackage",
//   description: "Track all your packages at one go! We made it easier for you",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme({
    typography: {
      fontFamily: montserrat.style.fontFamily,
    },
  });

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-touch-icon.png" />
        <title>MyPackage</title>
      </Head>
      <ThemeProvider theme={theme}>
        <body className={montserrat.className}>
          <Provider store={store}>
            <AuthContextProvider>
              <MainLayout>{children}</MainLayout>
            </AuthContextProvider>
          </Provider>
        </body>
      </ThemeProvider>
    </html>
  );
}
