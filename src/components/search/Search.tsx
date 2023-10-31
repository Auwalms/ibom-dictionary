import ContainerLayout from "@/Layouts/ContainerLayout";
import React from "react";

type Props = {};

const Search = (props: Props) => {
  return (
    <section className="search-background">
      <ContainerLayout>
        <div className="mt-[75px] py-[130px]">
          <div className="flex w-[70%] mx-auto">
            <input
              className="h-[76px] pl-[24px] rounded-tl-[15px] text-white rounded-bl-[15px] w-full border-2 border-[#CED9E3] outline-none bg-searchInputColor"
              type="text"
              placeholder="Type any Akwa Ibom name here..."
            />
            <button className="bg-[#09833D] px-[38px] rounded-tr-[15px] rounded-br-[15px] text-white">
              Search
            </button>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default Search;
