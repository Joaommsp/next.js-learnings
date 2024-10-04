import Image from "next/image";
import DropDownIcon from "@/assets/images/arrow-down.svg";

export interface MenuItemProps {
  text: string;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <button className="flex items-center gap-3">
      <span className="text-white font-regular text-sm">{props.text}</span>
      <Image src={DropDownIcon} alt="..." />
    </button>
  );
}
