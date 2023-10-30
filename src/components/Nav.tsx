import ContainerLayout from "@/Layouts/ContainerLayout";
import Image from "next/image";
import logo from "../assets/logo.svg";
import Link from "next/link";
import React from "react";

type Props = {};

const Nav = (props: Props) => {
  const isActive = "font-semibold text-[#09833D]";
  const isNotActive = "font-medium text-[#828282]";
  return (
    <div className="top-0 right-0 left-0 z-high w-full mx-auto items-center hidden lg:flex bg-transparent fixed">
      <ContainerLayout>
        <div className="flex justify-between items-center py-[16px] shadow-navShadow">
          <div>
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <div className="flex gap-[32px] text-[#828282] text-[18px]">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact Us</Link>
          </div>
          <div>Ibibio</div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Nav;
