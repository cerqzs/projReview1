export function sumOfArray(num: number[]): number {
    let arraySum: number = 0;
    for (let i = 0; i < num.length; i++) {
        arraySum = arraySum + num[i];
    }
    return arraySum;
}
