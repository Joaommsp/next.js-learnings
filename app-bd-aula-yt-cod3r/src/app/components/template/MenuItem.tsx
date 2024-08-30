import { IconHome } from "@tabler/icons-react";
import Link from "next/link";
import { ElementType } from "react";

export interface MenuItemProps {
  icon: ElementType;
  text: string;
  url: string;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link
      href={props.url}
      className="flex items-center gap-2 px-4 py-2 hover:bg-black"
    >
      <props.icon className="text-zinc-200" />
      <span className="text-zinc-200">{props.text}</span>
    </Link>
  );
}
