import Footer from "@/components/Footer";
import Header from "@/components/Header";

import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function MainLayout({ children, className }: Props) {
  return (
    <>
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </>
  );
}
