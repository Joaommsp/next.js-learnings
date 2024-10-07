import Image from "next/image";
import LogoNubank from "../assets/images/nubank-logo.png";
import MenuItem from "./MenuItem";
import SearchInput from "./SearchInput";
import UserIcon from "@/assets/images/icon-user.svg";

export function Header() {
  return (
    <header className="relative flex items-center w-full h-12 py-2 lg:py-0 lg:h-16 bg-primary-purple">
      <div className="w-full h-full flex items-center justify-between lg:max-w-[1046px] px-[16px] md:px-[2rem] lg:px-[15px] mx-auto">
        <div className="hidden lg:block absolute top-0 right-0 bg-primary-black w-[19%] h-full z-0"></div>
        <div className="flex lg:flex-row flex-col items-center lg:gap-14">
          <Image width={64} className="w-12 lg:w-16" src={LogoNubank} alt="..." />
          <ul className="hidden lg:flex lg:flex-row flex-col items-center gap-12">
            <li>
              <MenuItem text="Para você" />
            </li>
            <li>
              <MenuItem text="Para Empresas" />
            </li>
            <li>
              <MenuItem text="Serviços" />
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex  items-center gap-8">
          <SearchInput />
        </div>
        <div className="h-full flex justify-end lg:justify-center items-center lg:bg-primary-black lg:px-8 z-10">
          <button className="flex w-fit items-center gap-2">
            <Image src={UserIcon} alt="..." />
            <span className="text-xs lg:text-sm text-gray-100">Acesse sua conta</span>
          </button>
        </div>
      </div>
    </header>
  );
}
