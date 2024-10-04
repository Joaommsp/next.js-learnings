import IconSearch from "@/assets/images/icon-search.svg";
import Image from "next/image";

export default function SearchInput() {
  return (
    <div className="flex items-center gap-4">
      <Image src={IconSearch} alt="..." />
      <input
        type="text"
        placeholder="Pesquisar"
        className="bg-transparent outline-none border-0 border-b text-gray-100 placeholder-gray-300 text-sm"
      />
    </div>
  );
}
