export function sumOfArray(num: number[]): number {
  let arrSum: number = 0;
  for (let i = 0; i < num.length; i++) {
    arrSum += num[i];
  }
  return arrSum;
}
