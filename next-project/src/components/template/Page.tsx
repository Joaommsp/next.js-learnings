import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import { ReactNode } from "react";

export interface PageProps {
  children: ReactNode;
}

export default function Page(props: PageProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 flex">
        <Menu />
        <main className="flex-1 p-8">{props.children}</main>
      </div>
      <Footer />
    </div>
  );
}
