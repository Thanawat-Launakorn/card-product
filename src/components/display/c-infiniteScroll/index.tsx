import React, { FC } from "react";
type Props<T> = {
  items: T[];
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
export const CInfiniteScroll: FC<Props<any>> = ({
  items,
  renderItems,
  className,
}) => {
  return (
    <div
      className={`${className} grid grid-cols-1 gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 `}
    >
      {items.map((item, idx, arr) => (
        <React.Fragment key={idx}>
          {renderItems({ item, idx, arr })}
        </React.Fragment>
      ))}
    </div>
  );
};
