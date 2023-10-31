import ContainerLayout from "@/Layouts/ContainerLayout";
import React from "react";

type Props = {};

const Statistics = (props: Props) => {
  return (
    <div>
      <ContainerLayout>
        <div className="flex flex-col md:flex-row gap-[10px] px-[2%] mb-[40px] mt-[60px]">
          <div className="md:w-[33%]">
            <h1 className="text-[24px] font-extrabold">Recent Name Searches</h1>
            <div className="mt-[24px] space-y-[8px] text-[#828282] font-medium text-[24px]">
              <p>Nyaknno</p>
              <p>Nyaknno</p>
              <p>Nyaknno</p>
            </div>
          </div>

          <div className="md:w-[33%]">
            <h1 className="text-[24px] font-extrabold">Recent Addition</h1>
            <div className="mt-[24px] space-y-[8px] text-[#828282] font-medium text-[24px]">
              <p>Nyaknno</p>
              <p>Nyaknno</p>
              <p>Nyaknno</p>
            </div>
          </div>

          <div className="md:w-[33%]">
            <h1 className="text-[24px] font-extrabold">
              Most Popular Searches
            </h1>
            <div className="mt-[24px] space-y-[8px] text-[#828282] font-medium text-[24px]">
              <p>Nyaknno</p>
              <p>Nyaknno</p>
              <p>Nyaknno</p>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Statistics;
