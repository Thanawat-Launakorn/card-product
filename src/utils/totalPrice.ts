import { ICart } from "@/interface/product";

export default function getTotalPrice(arr: ICart[]): string {
  return String(
    arr
      .map((item) => item.price * item.quantity)
      .reduce((prev, curr) => prev + curr, 0)
      .toFixed(0)
  );
}
