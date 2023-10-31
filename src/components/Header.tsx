import ContainerLayout from "@/Layouts/ContainerLayout";
import Image from "next/image";
import image from "../assets/header-image.png";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <ContainerLayout>
        <div className="flex items-center justify-between mt-[75px] py-[52px]">
          <div className="text-[#2E4051]">
            <h1 className="text-[80px] font-black">Mmekòm o</h1>
            <p className="text-[28px] font-extralight opacity-[0.75]">
              Unlock the stories behind Akwa Ibom names....{" "}
            </p>
            <div className="flex mt-[64px]">
              <input
                className="h-[76px] pl-[24px] rounded-tl-[15px] rounded-bl-[15px] w-full border-2 border-[#CED9E3] outline-none bg-searchInputColor"
                type="text"
                placeholder="Type any Akwa Ibom name here..."
              />
              <button className="bg-[#09833D] px-[27px] rounded-tr-[15px] rounded-br-[15px] text-white">
                Search
              </button>
            </div>
          </div>

          <div>
            <Image src={image} alt="culture image" />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Header;
