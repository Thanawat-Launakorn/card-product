"use client";
import React, { FC } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { IProduct } from "@/interface/product";
import { Divider, Typography } from "antd";
import { fetchProductById } from "@/services/https";
import { CButton } from "@/components/button";
type Props = {};

export default function Product({}: Props) {
  const pathname = usePathname();
  const pathSplit = pathname.split("/");
  const id = pathSplit[2];
  const [fetching, setFetching] = React.useState<boolean>(true);
  const [product, setProduct] = React.useState<IProduct>();
  React.useEffect(() => {
    async function getProduct() {
      setFetching(true);
      try {
        const response = await fetchProductById(id);
        setProduct(response);
      } catch (err) {}
      setFetching(false);
    }

    getProduct();
  }, []);
  return (
    <React.Fragment>
      <div className="flex flex-row justify-between items-start px-32 py-20">
        {fetching ? (
          <>
            <Skekeleton />
          </>
        ) : (
          <>
            <center className="min-h-[430px] flex items-center justify-center w-[55%]">
              <Image
                alt="product-image"
                src={product ? product?.image : ""}
                width={200}
                height={200}
                className="object-cover scale-125"
              />
            </center>
            <div className="w-[45%]">
              <CardElement props={product} onPressed={() => {}} />
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
}

interface CardProps extends IProduct {}
const CardElement: FC<{ props?: CardProps; onPressed: () => void }> = ({
  props,
  onPressed,
}) => {
  const { title, price } = props || {};
  const Label = ({ children }: { children: string }) => (
    <h5 className="capitalize text-black font-bold text-base">{children} :</h5>
  );
  return (
    <div className="rounded-md shadow-lg border-[1px] bg-white flex flex-col py-10 px-5 ">
      <Typography.Title
        level={3}
        className="!text-orange-500"
        ellipsis={{ rows: 1, tooltip: true }}
      >
        {title}
      </Typography.Title>
      <Divider />

      <div className="flex flex-col">
        <Label children="price" />
        <b className="text-black text-xl ">${price}</b>
      </div>
      <Divider />
      <div className="flex flex-col">
        <Label children="Quantity" />
        <b className="text-black text-xl">${price}</b>
      </div>
      <Divider />

      <CButton
        onPressed={onPressed}
        children="Add to cart"
        color="bg-green-500"
      />
    </div>
  );
};

const Skekeleton = () => {
  return (
    <React.Fragment>
      <div
        role="status"
        className="max-w-sm animate-pulse flex shadow-md rounded-md bg-gray-200 h-[430px] text-transparent w-[55%]"
      >
        image
      </div>
      <div
        role="status"
        className="max-w-sm animate-pulse flex flex-col shadow-lg rounded-md bg-white py-10 px-5 border-[1px] w-[45%]"
      >
        <div className="bg-gray-200 h-[25px] rounded-full mb-1" />
        <Divider />
        <div className="bg-gray-200 h-[20px] rounded-full w-[50%] mb-3" />
        <div className="bg-gray-200 h-[15px] rounded-full w-[75%]" />

        <Divider />
        <div className="bg-gray-200 h-[20px] rounded-full w-[50%] mb-3" />
        <div className="bg-gray-200 h-[15px] rounded-full w-[75%]" />

        <Divider />
        <div className="bg-gray-200 h-[30px] rounded-md " />
      </div>
    </React.Fragment>
  );
};
