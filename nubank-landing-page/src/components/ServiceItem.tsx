import Image from "next/image";

export interface ServiceItemProps {
  icon: string;
  text: string;
}

export default function ServiceItem(props: ServiceItemProps) {
  return (
    <li className="flex items-center gap-8">
      <div className="w-7 h-7">
        <Image src={props.icon} alt="..." />
      </div>
      <span className="text-sm font-medium text-primary-gray">
        {props.text}
      </span>
    </li>
  );
}
