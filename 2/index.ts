/**
 * Day 2:
 * 
 * https://adventofcode.com/2024/day/2
 */

import { allIncreasing, allDecreasing, adjacentDifference } from "../lib/arrayValidation.ts";
import { getFileLinesStream } from "../lib/fs.ts";
import lineToIntArray from "../lib/lineToIntArray.ts";

const lines = await getFileLinesStream('input.txt');

function dampenArray(array: number[], index: number): number[] {
    return array.filter((_, i) => i !== index);
}

let safeReports = 0;
let safeDampenedReports = 0;

for await (const line of lines) {
    const array = lineToIntArray(line);

    // Check if the array is either all increasing or all decreasing and within bounds
    if(
        (allIncreasing(array) || allDecreasing(array))
        && adjacentDifference(array, 1, 3)
    ) {
        safeReports++;
    } else {
        //Deploy dampener
        for(let i = 0; i < array.length; i++) {
            const dampenedArray = dampenArray(array, i);
            
            if(
                (allIncreasing(dampenedArray) || allDecreasing(dampenedArray))
                && adjacentDifference(dampenedArray, 1, 3)
            ) {
                safeDampenedReports++;
                break;
            }
        }
    }

}

console.log(`Safe reports: ${safeReports}`);
console.log(`Safe dampened reports: ${safeDampenedReports}`);
console.log(`Total safe reports: ${safeReports + safeDampenedReports}`);