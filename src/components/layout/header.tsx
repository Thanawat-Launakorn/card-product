import React, { FC } from "react";
import { Layout, Typography } from "antd";
import Link from "next/link";
import { CCart } from "../display";
import { useRouter } from "next/navigation";
type Props = {};
const AppHeader: FC<Props> = ({}) => {
  const router = useRouter();
  return (
    <Layout.Header className="flex-none !px-10 sm:!px-20  sticky top-0 shadow-lg bg-white z-10 h-[80px]">
      <div className="flex flex-row items-end justify-between">
        <Link href={"/"}>
          <Typography.Title
            level={2}
            style={{
              fontWeight: "bold",
            }}
          >
           My Shop
          </Typography.Title>
        </Link>

        <CCart onPressed={() => router.push(`/cart`)} />
      </div>
    </Layout.Header>
  );
};

export default AppHeader;
