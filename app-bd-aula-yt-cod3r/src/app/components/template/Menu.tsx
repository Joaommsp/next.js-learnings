import { IconHome, IconUser } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <aside className="w-72 relative h-screen">
      <div className="bg-zinc-900 w-72 h-full fixed">
        <nav className="flex flex-col gap-1 py-7">
          <MenuItem icon={IconHome} text={"Home"} url={"/"} />
          <MenuItem icon={IconUser} text={"Users"} url={"/users"} />
        </nav>
      </div>
    </aside>
  );
}
