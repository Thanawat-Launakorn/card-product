import { Button, ButtonProps, Typography } from "antd";
import { FC } from "react";

interface IButton {
  onPressed: () => void;
  children: string;
}

export const CButton: FC<IButton> = ({ onPressed, children }) => {
  return (
    <button
      onClick={onPressed}
      className="bg-blue-500 rounded-lg px-5 py-2.5 hover:brightness-90"
    >
      <h5 className="!text-white text-sm">{children}</h5>
    </button>
  );
};
