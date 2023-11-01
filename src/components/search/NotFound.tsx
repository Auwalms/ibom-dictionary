import ContainerLayout from "@/Layouts/ContainerLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <section className="bg-[#F7F7F7]">
      <ContainerLayout>
        <div className="bg-white my-[72px] py-[24px] mx-[4%] flex flex-col justify-center items-center">
          <h1 className="text-black text-[40px] font-bold mb-[56px]">OOPS!</h1>
          <Image src="/404.png" alt="404" width={500} height={334} />
          <p className="mt-[23px] text-[#4F4F4F] text-[32px] font-medium">
            No meaning found...{" "}
            <Link
              href={`/suggest/test`}
              className="text-[#09833D] font-semibold"
            >
              Suggest a meaning?
            </Link>
          </p>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default NotFound;
