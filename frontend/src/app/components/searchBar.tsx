import { useState } from "react";
import { Baloo_Bhaijaan_2 } from "next/font/google";

const ibmPlexArabic = Baloo_Bhaijaan_2({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

type Props = {
  onSearch: (term: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [term, setTerm] = useState("");

  const handleClick = () => {
    onSearch(term);
  };

  return (
    <div className="mt-15 flex gap-2 mb-6">
      <button
        onClick={handleClick}
        className={`bg-[#ffffff]/12 flex-2 backdrop-blur-md text-white px-2 py-3 rounded-[7px] hover:bg-[#e7e7e7] hover:text-black md:hover:flex-3 transition-all hover:bg-gradient-to-tl hover:from-pink-400 hover:to-orange-400 ${ibmPlexArabic.className} font-bold text-xl cursor-pointer`}
      >
        ابحث
      </button>
      <input
        type="text"
        className={`border-2 p-1 pr-2 flex-20 rounded-[7px] focus:outline-none focus:ring-0 text-right ${ibmPlexArabic.className} font-medium text-xl`}
        placeholder="أبحث عن بودكاست "
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleClick();
          }
        }}
      />
    </div>
  );
}
