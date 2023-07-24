import { IProduct } from "@/interface/product";
import { FC } from "react";
export const CSkeletonProduct: FC<{ props: IProduct }> = ({ props }) => {
  return (
    <div
      role="status"
      className="max-w-sm animate-pulse bg-white flex flex-col shadow-md rounded-md"
    >
      <div className="bg-gray-200 h-[350px] rounded-t-md" />
      <div className="p-5 flex flex-col">
        <div className="bg-gray-200 h-[20px] rounded-full mb-1" />
        <div className="bg-gray-200 h-[12px] rounded-full w-[50%]" />
        <div className="grid grid-cols-2 gap-x-3 mt-3">
          <div className="bg-gray-200 h-[30px] rounded-md " />
          <div className="bg-gray-200 h-[30px] rounded-md " />
        </div>
      </div>
    </div>
  );
};
