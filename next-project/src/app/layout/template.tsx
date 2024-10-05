"use client";

import { ReactNode, useState } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const [data] = useState(new Date());

  return (
      <div className="border-8 border-green-500 p-8">
        <span>{data.toLocaleTimeString()}</span>
        <main>{props.children}</main>
      </div>
  );
}
