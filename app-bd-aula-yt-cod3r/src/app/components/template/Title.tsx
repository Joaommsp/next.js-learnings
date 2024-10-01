import { ElementType } from "react";

export interface TitleProps {
  titleContent: string;
  subtitleContent: string;
  icon: ElementType;
}

export default function Title(props: TitleProps) {
  return (
    <div className="flex gap-2  mb-8">
      <props.icon size={50} stroke={1}/>
      <div className="flex flex-col justify-start">
        <h1 className="font-semibold text-2xl">{props.titleContent}</h1>
        <span>{props.subtitleContent}</span>
      </div>
    </div>
  );
}
