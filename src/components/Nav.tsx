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
    <div className="top-0 right-0 left-0 z-high w-full mx-auto items-center hidden lg:flex bg-white fixed shadow-navShadow">
      <ContainerLayout>
        <div className="flex justify-between items-center py-[16px]">
          <div>
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>

          <div className="flex gap-[32px] text-[#828282] text-[18px]">
            <Link className="hover:text-[#09833D]" href="/">
              Home
            </Link>
            <Link className="hover:text-[#09833D]" href="/">
              About
            </Link>
            <Link className="hover:text-[#09833D]" href="/">
              Contact Us
            </Link>
          </div>

          <div>
            <select>
              <option value="ibibio">Ibibio</option>
              <option value="efik">Efik</option>
              <option value="oron">Oron</option>
            </select>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Nav;
