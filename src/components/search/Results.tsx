import ContainerLayout from "@/Layouts/ContainerLayout";
import React from "react";
import {
  EditIcon,
  PlusIcon,
  SpeakIcon,
  ThumbsDown,
  ThumbsUp,
} from "../Icons/Icons";

type Props = {};

const Results = (props: Props) => {
  return (
    <section className="bg-[#F7F7F7]">
      <ContainerLayout>
        <div className="bg-white my-[72px] py-[24px] mx-[4%]">
          <div className="px-[40px] flex justify-between">
            <div>
              <div className="flex gap-[16px] items-center">
                <h1 className="text-black text-[40px] font-bold">Mfọn</h1>
                <SpeakIcon />
              </div>
              <p className="text-[18px] text-[#828282]">(noun)</p>
            </div>

            <div className="flex gap-[30px]">
              <ThumbsUp />
              <ThumbsDown />
            </div>
          </div>

          <div className="h-[1px] bg-[#E0E0E0] mx-[40px] mt-[32px] mb-[24px]" />

          <div className="px-[40px] text-[#828282]">
            <div>
              <h1 className="text-[24px] font-semibold">Meaning</h1>
              <div>
                <li>Favour.</li>
                <li>Grace.</li>
              </div>
            </div>

            <div className="mt-[24px]">
              <h1 className="text-[24px] font-semibold">Synonyms</h1>
              <div>
                <p className="text-[#09833D]">Mfonobong</p>
                <p className="text-[#09833D]">Mfoniso</p>
              </div>
            </div>

            <div className="mt-[20px] flex justify-end gap-[24px]">
              <button className="flex gap-[8px] items-center text-[#09833D] text-[18px] font-semibold p-[16px] rounded-[10px] border border-[#09833D] mt-[24px]">
                <EditIcon />
                Edit or Improve meaning
              </button>
              <button className="flex gap-[8px] items-center text-[#09833D] text-[18px] font-semibold p-[16px] rounded-[10px] border border-[#09833D] mt-[24px]">
                <PlusIcon />
                Add another meanings
              </button>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default Results;
