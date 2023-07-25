import React, { FC } from "react";
import { Layout } from "antd";
type Props = {};
const AppFooter: FC<Props> = ({}) => {
  return (
    <Layout.Footer className="bg-zinc-50 border-[1px] shadow-md text-center !py-[37px]">
      Made by thanawat
    </Layout.Footer>
  );
};

export default AppFooter;
