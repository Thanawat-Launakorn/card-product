import React, { FC } from "react";
import { Layout } from "antd";
import Link from "next/link";
type Props = {};
const AppFooter: FC<Props> = ({}) => {
  return (
    <Layout.Footer className="bg-zinc-50 border-[1px] shadow-md text-center !py-[27.5px] h-full">
      Made by{" "}
      <Link href={"https://github.com/Thanawat-Launakorn"}>
        <span className="underline">Thanawat</span>
      </Link>
    </Layout.Footer>
  );
};

export default AppFooter;
