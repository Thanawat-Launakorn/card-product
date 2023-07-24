import React, { FC } from "react";
import { Layout, Typography } from "antd";
import { CCart } from "../display";
type Props = {};
const AppHeader: FC<Props> = ({}) => {
  return (
    <Layout.Header className="!px-10 sm:!px-20 sticky top-0 shadow-lg bg-white">
      <div className="flex flex-row items-center justify-between">
        <Typography.Title
          level={3}
          style={{
            fontWeight: "bold",
          }}
        >
          My Shop
        </Typography.Title>
        <CCart items={[]} onPressed={() => {}} />
      </div>
    </Layout.Header>
  );
};

export default AppHeader;
