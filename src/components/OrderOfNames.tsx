import ContainerLayout from "@/Layouts/ContainerLayout";
import React from "react";

type Props = {};

const OrderOfNames = (props: Props) => {
  const alphabets = [
    "a",
    "b",
    "d",
    "e",
    "f",
    "g",
    "i",
    "k",
    "m",
    "n",
    "ñ",
    "o",
    "ọ",
    "s",
    "t",
    "u",
    "w",
    "y",
    "kp",
    "kw",
    "ny",
    "nw",
    "gh",
  ];

  return (
    <div className="bg-[#F7F7F7]">
      <ContainerLayout>
        <div className="mt-[32px] mb-[92px]">
          <h1 className="text-[24px] font-black text-center">
            Alphabetical Order of Names:
          </h1>
          <div className="flex flex-wrap place-content-center mt-[48px] mb-[92px]">
            {alphabets.map((alphabet, index) => (
              <div
                key={index}
                className="w-[55px] h-[60px] border bg-white flex items-center justify-center"
              >
                <p className="text-[24px] font-semibold text-[#4F4F4F]">
                  {alphabet}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default OrderOfNames;
