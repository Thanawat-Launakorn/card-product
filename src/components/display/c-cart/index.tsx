import { useCart } from "@/providers/provider-cart";
import getQuantity from "@/utils/totalQuantity";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import { FC } from "react";

type Props = {
  onPressed: () => void;
};

export const CCart: FC<Props> = ({ onPressed }) => {
  const { carts } = useCart();
  return (
    <div onClick={onPressed} className="cursor-pointer">
      <Badge count={getQuantity(carts)} color={"blue"} overflowCount={9}>
        <Avatar
          src={
            <ShoppingCartOutlined className="text-black text-2xl rounded-full" />
          }
          shape="circle"
          size={"large"}
        />
      </Badge>
    </div>
  );
};
