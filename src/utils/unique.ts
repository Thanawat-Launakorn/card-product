export default function getUnique(arr: string[]) {
  return arr.filter((item, idx, array) => array.indexOf(item) === idx);
}
