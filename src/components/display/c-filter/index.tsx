import React, { FC } from "react";
type Props = {
  category: string[];
  isSkeleton?: boolean;
};
export const CFilter: FC<Props> = ({ category, isSkeleton }) => {
  return (
    <React.Fragment>
      {isSkeleton && (
        <div
          role="status"
          className="animate-pulse flex-row items-center  hidden sm:flex "
        >
          {new Array(5).fill({} as string).map((_, idx) => (
            <div
              className="h-[30px] bg-gray-200 rounded-md w-[80px] mr-5"
              key={idx}
            />
          ))}
        </div>
      )}
      <div className="flex-row items-center mb-5 overflow-x-scroll hidden sm:flex">
        {category.map((cate) => (
          <Tag cate={cate} />
        ))}
      </div>
    </React.Fragment>
  );
};

const Tag = ({ cate }: { cate: string }) => {
  return (
    <div className="bg-orange-200 rounded-md px-2 py-1 mr-5">
      <div className="text-black font-bold text-xs sm:text-sm capitalize cursor-pointer">
        {cate}
      </div>
    </div>
  );
};
