import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
      <div className="border-8 border-purple-500 p-8">
       {props.children}
      </div>
  );
}
