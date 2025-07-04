import React from "react";
import Image from "next/image";
import { Logo, TextLogo } from "../../../assets";

export default function Header() {
  return (
    <div className="flex h-50 flex-row-reverse justify-center sm:justify-start items-center sm:mr-15">
      <Image className="ml-3" src={Logo} alt="Thmanyah Icon" width={67} />
      <Image src={TextLogo} alt="Thmanyah Text" width={240} height={100} />
    </div>
  );
}
