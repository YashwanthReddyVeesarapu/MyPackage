import Footer from "@/components/Footer";
import Header from "@/components/Header";

import React from "react";

import { UserAuth } from "@/components/context/AuthContext";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function MainLayout({ children, className }: Props) {
  const auth = UserAuth();

  console.log(auth);

  return (
    <>
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </>
  );
}
