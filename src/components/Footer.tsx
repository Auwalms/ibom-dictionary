import ContainerLayout from "@/Layouts/ContainerLayout";
import Link from "next/link";
import React from "react";
import { InstagramIcon, LinkedInIcon, XIcon } from "./Icons/Icons";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <ContainerLayout>
        <div className="flex justify-between items-center py-[16px]">
          <div>
            <p>Copyright © 2023. ibomnames.com </p>
          </div>

          <div className="flex gap-[45px]">
            <InstagramIcon />
            <LinkedInIcon />
            <XIcon />
          </div>

          <div className="flex gap-[32px] text-[#828282] text-[18px]">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact Us</Link>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Footer;
