import React from "react";
import { Header } from "@/features/auth/header";
import { Footer } from "@/features/home/footer";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
