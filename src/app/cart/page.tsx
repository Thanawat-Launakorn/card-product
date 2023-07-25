"use client";
import { useCart } from "@/providers/provider-cart";
import { useRouter } from "next/navigation";
import { FC } from "react";
import React from "react";
import Link from "next/link";
import { Divider, Typography } from "antd";
import { ICart } from "@/interface/product";
import Image from "next/image";
import { CInfiniteScroll, CQuantity } from "@/components/display";
import { DeleteFilled } from "@ant-design/icons";
import { CButton } from "@/components/button";
import getTotalPrice from "@/utils/totalPrice";
type Props = {};

export default function Cart({}: Props) {
  const router = useRouter();
  const { carts, clear, increaseCart, decreaseCart, deleteCart } = useCart();

  let content = (
    <div className="flex flex-col">
      <Typography.Title
        level={1}
        style={{
          fontWeight: "bold",
        }}
      >
        Your shopping cart is empty
      </Typography.Title>

      <p className="text-black text-xl">
        Check out our awesome products{" "}
        <Link href={"/"}>
          <span className="text-blue-700 underline">here!</span>
        </Link>{" "}
      </p>
    </div>
  );

  if (carts.length > 0) {
    content = (
      <div className="flex flex-col">
        <div className="hidden sm:flex flex-row justify-between items-center">
          <Typography.Title
            level={1}
            style={{
              fontWeight: "bold",
            }}
          >
            Your shopping cart
          </Typography.Title>
          <CButton children="Clear all" color="bg-red-500" onPressed={clear} />
        </div>

        <CInfiniteScroll
          items={carts}
          optional="cart"
          renderItems={({ item }: { item: ICart }) => (
            <CartItem
              props={item}
              onIncrease={() => {
                increaseCart(item);
              }}
              onDecrease={() => {
                decreaseCart(item);
              }}
              onDelete={() => {
                deleteCart(item);
              }}
            />
          )}
        />
        <Divider />
        <TotalItem
          onPressed={() => router.push("/success")}
          quantity={getTotalPrice(carts)}
        />
      </div>
    );
  }
  return <React.Fragment>{content}</React.Fragment>;
}

type TotalProps = {
  quantity: string;
  onPressed: () => void;
};

const TotalItem: FC<TotalProps> = ({ quantity, onPressed }) => {
  return (
    <div className="flex flex-col sm:self-end sm:w-[250px]">
      <Typography.Title level={1} className="text-end">
        Total: ${quantity}
      </Typography.Title>
      <CButton
        children="Go to checkout"
        color="bg-green-500"
        onPressed={onPressed}
      />
    </div>
  );
};

const CartItem: FC<{
  props: ICart;
  onDelete: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}> = ({ props, onDelete, onDecrease, onIncrease }) => {
  const { image, title, quantity, price } = props;
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-5 border-[1px] h-[130px] rounded-md mb-3 justify-between shadow-sm hover:shadow-lg transition-all delay-75">
      <div className="flex flex-row items-center w-full">
        <Image
          alt="product-image"
          src={image}
          width={50}
          height={50}
          className="mr-5"
        />
        <Typography.Title
          level={4}
          ellipsis={{ tooltip: true }}
          className="w-[300px]"
          style={{
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography.Title>
      </div>
      <div className="flex flex-row items-center justify-between w-full md:w-auto">
        <div className="lg:mx-20">
          <CQuantity
            children={String(quantity)}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
          />
        </div>

        <Typography.Title
          level={4}
          className="w-[100px] text-end"
          style={{
            fontWeight: "bold",
            margin: 0,
          }}
        >
          ${price.toFixed(2)}
        </Typography.Title>

        <DeleteFilled
          className="text-gray-500 ml-4 hover:text-red-500 transition-colors ease-linear delay-75 cursor-pointer"
          onClick={onDelete}
        />
      </div>
    </div>
  );
};
