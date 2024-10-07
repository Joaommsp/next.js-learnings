import Image from "next/image";

export interface ServiceItemProps {
  icon: string;
  text: string;
}

export default function ServiceItem(props: ServiceItemProps) {
  return (
    <li className="flex items-center gap-8">
      <div className="w-12 h-12">
        <Image className="w-7" src={props.icon} alt="..." />
      </div>
      <span className="text-xs lg:text-sm font-medium text-primary-gray">
        {props.text}
      </span>
    </li>
  );
}
