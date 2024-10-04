import Image from "next/image";
import LogoNubank from "../assets/images/nubank-logo.png";
import MenuItem from "./MenuItem";
import SearchInput from "./SearchInput";
import UserIcon from "@/assets/images/icon-user.svg";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="relative flex items-center w-full h-16 bg-primary-purple">
      <Container>
        <div className="absolute top-0 right-0 bg-primary-black w-[19%] h-full z-0"></div>
        <div className="flex items-center gap-14">
          <Image width={64} src={LogoNubank} alt="..." />
          <ul className="flex items-center gap-12">
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
        <div className="flex items-center gap-8">
          <SearchInput />
        </div>
        <div className=" h-full flex items-center bg-primary-black px-8 z-10">
          <button className="flex items-center gap-2">
            <Image src={UserIcon} alt="..." />
            <span className="text-sm text-gray-100">Acesse sua conta</span>
          </button>
        </div>
      </Container>
    </header>
  );
}
