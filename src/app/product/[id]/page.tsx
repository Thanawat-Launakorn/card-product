"use client";
import React, { FC } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ICart, IProduct } from "@/interface/product";
import { Divider, Typography } from "antd";
import { fetchProductById } from "@/services/https";
import { CButton } from "@/components/button";
import { CQuantity } from "@/components/display";
import { useCart } from "@/providers/provider-cart";
type Props = {};

export default function Product({}: Props) {
  const pathname = usePathname();
  const pathSplit = pathname.split("/");
  const id = pathSplit[2];
  const [fetching, setFetching] = React.useState<boolean>(true);
  const [product, setProduct] = React.useState<ICart>();
  const { addCart, quantity, setQuantity } = useCart();

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
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-start lg:py-20 gap-5">
        {fetching ? (
          <>
            <Skekeleton />
          </>
        ) : (
          <>
            <center className="min-h-[430px] flex items-center justify-center">
              <Image
                alt="product-image"
                src={product ? product?.image : ""}
                width={200}
                height={200}
                className="object-cover scale-125"
              />
            </center>
            <div className="w-[350px] sm:w-auto md:w-[100%] lg:w-[90%] xl:w-[70%] xl:place-self-start">
              <CardElement
                props={product}
                onPressed={() => {
                  addCart(product, quantity);
                  setQuantity(1);
                }}
              />
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
  const { title, price, quantity } = props || {};
  const { quantity: number, setQuantity } = useCart();

  const Label = ({ children }: { children: string }) => (
    <h5 className="capitalize text-black font-bold text-base">{children} :</h5>
  );
  return (
    <div className="rounded-md shadow-lg border-[1px] bg-white flex flex-col py-10 px-5 ">
      <Typography.Title
        level={3}
        className="!text-black"
        ellipsis={{ rows: 1, tooltip: true }}
      >
        {title}
        {quantity}
      </Typography.Title>
      <Divider />

      <div className="flex flex-col">
        <Label children="price" />
        <b className="text-black text-xl ">${price?.toFixed(2)}</b>
      </div>
      <Divider />
      <div className="flex flex-col">
        <Label children="Quantity" />
        <CQuantity
          children={String(number)}
          onIncrease={() => setQuantity((prev: number) => prev + 1)}
          onDecrease={() =>
            setQuantity((prev: number) => (prev > 1 ? prev - 1 : prev))
          }
        />
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
        className="max-w-sm animate-pulse flex shadow-md rounded-md bg-gray-200 h-[430px] text-transparent w-full"
      >
        image
      </div>
      <div
        role="status"
        className="max-w-sm animate-pulse flex flex-col shadow-lg rounded-md bg-white py-10 px-5 border-[1px] w-full"
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
