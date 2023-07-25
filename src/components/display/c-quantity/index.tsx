import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { FC } from "react";

type Props = {
  children: string;
  onIncrease: () => void;
  onDecrease: () => void;
};

export const CQuantity: FC<Props> = ({ children, onIncrease, onDecrease }) => {
  return (
    <div className="flex flex-row items-center">
      <MinusOutlined
        className="text-black cursor-pointer hover:bg-red-400 p-2 rounded-md"
        onClick={onDecrease}
      />
      <Typography.Title
        level={4}
        className="text-black font-black mt-2.5 w-[40px] text-center"
      >
        {children}
      </Typography.Title>
      <PlusOutlined
        className="text-black cursor-pointer hover:bg-green-400 p-2 rounded-md"
        onClick={onIncrease}
      />
    </div>
  );
};
