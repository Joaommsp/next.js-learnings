import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
}

export function Container(props: ContainerProps) {
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-between max-w-[1046px] px-[15px] mx-auto">
      {props.children}
    </div>
  );
}

