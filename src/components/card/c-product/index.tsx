import { CButton } from "@/components/button";
import { IProduct } from "@/interface/product";
import { StarFilled } from "@ant-design/icons";
import { Typography } from "antd";
import Image from "next/image";
import React, { FC } from "react";
export const CProduct: FC<{
  props: IProduct;
  addCart: (v: any) => void;
  navigation?: () => void;
}> = ({ props, addCart, navigation }) => {
  const { title, description, image, price, rating } = props;
  return (
    <div
      className="bg-white shadow-sm rounded-md p-5 flex flex-col hover:shadow-xl transition-shadow ease-linear delay-75 cursor-pointer"
      onClick={navigation}
    >
      <center className="min-h-[350px] flex items-center justify-center">
        <Image
          alt="product-image"
          src={image}
          width={200}
          height={200}
          className="object-cover"
        />
      </center>
      <Typography.Title
        className="!text-orange-400 !text-[19px]"
        ellipsis={{ rows: 1, tooltip: true }}
      >
        {title}
      </Typography.Title>
      <Rating props={rating} />
      <div className="my-2 flex flex-row items-center justify-between">
        <h1 className="text-gray-900 font-extrabold text-xl">{`$${price.toFixed(
          2
        )}`}</h1>
        <CButton
          onPressed={addCart}
          children="Add to cart"
          color="bg-blue-700"
        />
      </div>
    </div>
  );
};

const Rating: FC<{ props?: { rate: number; count: number } }> = ({ props }) => {
  const { count, rate } = props || {};
  return (
    <div className="flex flex-row items-center text-xs">
      <div className="flex flex-row items-center">
        <StarFilled className="text-yellow-300 mr-1" />
        <h1 className="text-black font-bold">{rate}</h1>
      </div>
      <div className="border-l-[1px] border-[black] h-[10px] mx-[5px]"></div>
      <div>
        <p className="text-gray-500">{`${count} reviewers`}</p>
      </div>
    </div>
  );
};
