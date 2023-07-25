import { ICart } from "@/interface/product";

export default function getQuantity(arr: ICart[]) {
  const total = arr
    .map((item) => item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  return total;
}
