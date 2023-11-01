import ContainerLayout from "@/Layouts/ContainerLayout";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import OrderOfNames from "@/components/OrderOfNames";
import Search from "@/components/search/Search";
import Head from "next/head";
import React from "react";

type Props = {};

const EditMeaning = (props: Props) => {
  return (
    <>
      <Head>
        <title>Ibom Dictionary | Edit a name</title>
        <meta name="description" content="Edit the meaning of a name" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <div className="w-full relative flex flex-col">
        <Nav />
        <Search />

        <div className="bg-[#F7F7F7] min-h-screen">
          <ContainerLayout>
            <div className="bg-white mt-[72px] pt-[24px] pb-[132px] mx-[4%]">
              <div className="pl-[40px]">
                <h1 className="text-black text-[40px] font-bold">
                  Add another meaning
                </h1>
              </div>

              <div className="flex flex-col mt-[48px] mx-[4%]">
                <div className="flex flex-col md:flex-row text-[#BDBDBD] text-[24px] font-medium md:gap-[60px]">
                  <div className="w-full">
                    <label className="">Name</label>
                    <input
                      type="text"
                      placeholder="Mfon"
                      disabled={true}
                      className="text-[20px] border border-[#828282] rounded-[10px] py-[19px] pl-[24px] outline-none w-full mt-[8px] hover:cursor-not-allowed"
                    />
                  </div>

                  <div className="w-full">
                    <label className="">Figure of Speech</label>
                    <input
                      type="text"
                      placeholder="Noun"
                      disabled={true}
                      className="text-[20px] border border-[#828282] rounded-[10px] py-[19px] pl-[24px] outline-none w-full mt-[8px] hover:cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="mt-[32px]">
                  <label className="text-[#333] text-[24px] font-medium">
                    Meaning
                  </label>
                  <textarea
                    className="text-[20px] border border-[#828282] rounded-[10px] pt-[19px] pl-[24px] outline-none w-full mt-[8px]"
                    rows={5}
                    placeholder="Type your meaning here"
                    defaultValue="Type your meaning here"
                  />
                </div>

                <div className="mt-[32px]">
                  <label className="text-[#BDBDBD] text-[24px] font-medium">
                    Synonyms
                  </label>
                  <input
                    type="text"
                    placeholder="Synonyms"
                    disabled={true}
                    className="text-[20px] border border-[#828282] rounded-[10px] py-[19px] pl-[24px] outline-none w-full mt-[8px] hover:cursor-not-allowed"
                  />
                </div>

                <div className="flex justify-center mt-[80px]">
                  <button className="rounded-[10px] w-[360px] bg-[#09833D] p-[8px] text-[#F2F2F2] text-[20px] font-semibold">
                    Submit
                  </button>
                  {/* <button>Cancel</button> */}
                </div>
              </div>
            </div>
          </ContainerLayout>
        </div>

        <OrderOfNames />
        <Footer />
      </div>
    </>
  );
};

export default EditMeaning;
