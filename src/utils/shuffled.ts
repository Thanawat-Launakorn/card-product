import { IProduct } from "@/interface/product";

export default function getShuffled(arr: IProduct[]) {
  const shuffled = arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled;
}
