"use client";
import { CButton } from "@/components/button";
import { Result } from "antd";
import { useRouter } from "next/navigation";
import { FC } from "react";

type Props = {};
const Success: FC<Props> = ({}) => {
  const router = useRouter();

  return (
    <div>
      <Result
        className="my-[120px]"
        status="success"
        title="Successfully Purchased Your Order"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <CButton
            children="Go Home"
            color="bg-blue-700"
            onPressed={() => router.push("/")}
            key={1}
          />,
          <CButton
            children="Buy Again"
            color="bg-green-500"
            onPressed={() => router.back()}
            key={2}
          />,
        ]}
      />
    </div>
  );
};

export default Success;
