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

// export const metadata: Metadata = {
//   title: "MyPackge",
//   description: "Track all your packages in a go...",
// };

import { store, persistor } from "@/redux/store";

import { auth as firebaseAuth } from "@/lib/firebase/config";
import MainLayout from "@/layouts/MainLayout";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { Metadata } from "next";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = firebaseAuth;

  const theme = createTheme({
    typography: {
      fontFamily: montserrat.style.fontFamily,
    },
  });

  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={montserrat.className}>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <AuthContextProvider>
                <MainLayout>{children}</MainLayout>
              </AuthContextProvider>
            </PersistGate>
          </Provider>
        </body>
      </ThemeProvider>
    </html>
  );
}
