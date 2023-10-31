import ContainerLayout from "@/Layouts/ContainerLayout";
import React from "react";
import image from "../assets/suggestion-image.png";
import Image from "next/image";

type Props = {};

const Suggestion = (props: Props) => {
  return (
    <div>
      <ContainerLayout>
        <div className="flex items-center my-[40px]">
          <div className="w-[50%]">
            <Image src={image} alt="suggestion-image" />
          </div>

          <div className="text-[#2E4051] w-[50%]">
            <h1 className="font-black text-[40px]">Suggest New Names?</h1>
            <p className="text-[24px] opacity-[0.75] mt-[16px]">
              Contribute to our rich tapestry of names! Share your unique Akwa
              Ibom names and their stories with us. Together, let&apos;s
              preserve and celebrate the Cultural Significance of names in our
              beautiful land.
            </p>
            <button className="text-[#09833D] text-[18px] font-semibold p-[16px] rounded-[10px] border border-[#09833D] mt-[24px]">
              Suggest a name(s)
            </button>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Suggestion;
