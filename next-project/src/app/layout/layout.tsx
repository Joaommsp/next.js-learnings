"use client";

import { ReactNode, useState } from "react";

import Page from "@/components/template/Page";

export interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const [data] = useState(new Date());

  return (
    <Page>
      <div className="border-8 border-red-500 p-8">
        <span>{data.toLocaleTimeString()}</span>
        <main>{props.children}</main>
      </div>
    </Page>
  );
}
