import { ICart } from "@/interface/product";
import React, { FC } from "react";
type Props<T> = {
  items: T[];
  optional?: "cart" | "product";
  renderItems: ({
    item,
    idx,
    key,
    arr,
  }: {
    item: T;
    idx: number;
    key?: number | string;
    arr: Array<T>;
  }) => React.ReactNode;
  className?: string;
};
export const CInfiniteScroll: FC<Props<ICart>> = ({
  items,
  optional = "product",
  renderItems,
  className,
}) => {
  return (
    <div
      className={`${className} ${
        optional === "product"
          ? "grid grid-cols-1 gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 "
          : optional === "cart"
          ? ""
          : ""
      }`}
    >
      {items.map((item, idx, arr) => (
        <React.Fragment key={idx}>
          {renderItems({ item, idx, arr })}
        </React.Fragment>
      ))}
    </div>
  );
};
