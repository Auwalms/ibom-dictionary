import React from "react";

type Props = {
  children: React.ReactNode;
};

// const styles = {
//   parentContainer:
//     "w-full h-full overflow-x-hidden md:overflow-x-auto overflow-y-hidden",
//   container: "2xl:container 2xl:mx-auto",
//   chiefCenter:
//     "max-w-[1300px] w-full px-4 md:px-6 2xl:px-0 mx-auto overflow-x-visible overflow-y-visible",
// };

const ContainerLayout = ({ children }: Props) => {
  return (
    <div className="w-full h-full overflow-x-hidden md:overflow-x-auto overflow-y-hidden">
      <div className="2xl:container 2xl:mx-auto">
        <div className="max-w-[1300px] w-full px-4 md:px-6 2xl:px-0 mx-auto overflow-x-visible overflow-y-visible">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContainerLayout;
