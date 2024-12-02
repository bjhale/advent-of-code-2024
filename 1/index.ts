/**
 * Day 1:
 * 
 * https://adventofcode.com/2024/day/1
 */

import { getFileLinesStream } from "../lib/fs.ts";

const lines = await getFileLinesStream('input.txt');


// Separate the two columns into two arrays
let a:number[] = [];
let b:number[] = [];
for await (const line of lines) {
    console.log(line);
    
    const [aItem, bItem] = line.split(/\s+/);

    a.push(parseInt(aItem));
    b.push(parseInt(bItem));
}

//Sort each array
a.sort();
b.sort();

//compare and find distance between each pair
let distanceSum = 0;
for (let i = 0; i < a.length; i++) {
    distanceSum += Math.abs(a[i] - b[i]);
}

console.log(`The sum of the distances between the two arrays is ${distanceSum}`);

//compare and find the sum of the similarity scores
let similaritySum = 0;
for (let i = 0; i < a.length; i++) {
    const matches = b.filter(x => x === a[i]).length;

    similaritySum += (a[i] * matches);
}

console.log(`The sum of the similarity scores between the two arrays is ${similaritySum}`);