import Image from "next/image";
import LogoNubank from "../assets/images/nubank-logo.png";
import DropDownIcon from "@/assets/images/arrow-down.svg";

export function Header() {
  return (
    <div className="w-full h-20">
      <div>
        <div>
          <Image src={LogoNubank} alt="..." />
          <ul>
            <li>
              <button>
                <span>Para Você</span>
                <Image src={DropDownIcon} alt="..." />
              </button>
            </li>
            <li>
              <button>
                <span>Link</span>
                <Image src={DropDownIcon} alt="..." />
              </button>
            </li>
            <li>
              <button>
                <span>Link</span>
                <Image src={DropDownIcon} alt="..." />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
