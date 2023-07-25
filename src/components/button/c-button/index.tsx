import { FC } from "react";

interface IButton {
  onPressed: (v: any) => void;
  children: string;
  color: "bg-blue-700" | "bg-green-500" | "bg-red-500";
}

export const CButton: FC<IButton> = ({ onPressed, children, color }) => {
  return (
    <button
      onClick={onPressed}
      className={`${color} rounded-lg px-5 py-2.5 hover:brightness-75 transition-all ease-linear delay-75`}
    >
      <h5 className="!text-white text-sm">{children}</h5>
    </button>
  );
};
