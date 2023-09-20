"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOfArray = void 0;
function sumOfArray(num) {
    let arrSum = 0;
    for (let i = 0; i < num.length; i++) {
        arrSum += num[i];
    }
    return arrSum;
}
exports.sumOfArray = sumOfArray;
