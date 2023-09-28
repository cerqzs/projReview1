export function sumOfArray(num: number[]): number | string {
    let arraySum: number = 0;
    for (let i = 0; i < num.length; i++) {
        arraySum = arraySum + num[i];
    }
    return "O somatório do array é: " + arraySum;
}
