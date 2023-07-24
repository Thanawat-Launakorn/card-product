import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  optional?: "default" | "card";
};
const Container: FC<Props> = ({
  children,
  className,
  optional = "default",
}) => {
  return (
    <React.Fragment>
      {optional === "default" && (
        <div className={`${className} p-5 sm:px-20 sm:py-5`}>{children}</div>
      )}
      {optional === "card" && <div className={``}>{children}</div>}
    </React.Fragment>
  );
};

export default Container;
