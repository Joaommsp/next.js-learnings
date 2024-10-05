import Page from "@/components/template/Page";
import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return <Page>
    {props.children}
  </Page>
}