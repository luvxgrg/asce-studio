import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WorkLayout({ children }: { children: ReactNode }) {
  return <><Navbar /><main id="main-content" className="bg-black text-white">{children}</main><Footer /></>;
}
