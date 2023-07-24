import { ShoppingCartOutlined } from "@ant-design/icons";
import { FC } from "react";

type Props = {
  items: any[];
  onPressed: () => void;
};

export const CCart: FC<Props> = ({ onPressed, items }) => {
  return (
    <div>
      <ShoppingCartOutlined className="text-[24px]" />
    </div>
  );
};
