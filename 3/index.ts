/**
 * Day 3:
 * 
 * https://adventofcode.com/2024/day/3
 */

import { getFileLinesStream } from "../lib/fs.ts";

const lines = await getFileLinesStream('input.txt');

function executeMul(instruction: string): number {
    const [a, b] = instruction.match(/[0-9]+/g)!.map(Number);
    return a * b;
}

let instructions: string[] = [];

for await (const line of lines) {
    const matches = line.matchAll(/mul\([0-9]+,[0-9]+\)|do\(\)|don\'t\(\)/g);

    for (const match of matches) {
        instructions.push(match[0]);
    }
}

let simpleAccumulator = 0;
let logicalAccumulator = 0;

let state = true;

for (const instruction of instructions) {
    const match = instruction.match(/[a-z\']+/);
    const op = match ? match[0] : '';
    
    switch (op) {
        case 'mul':
            simpleAccumulator += executeMul(instruction);
            if (state) {
                logicalAccumulator += executeMul(instruction);
            }
            break;
        case 'do':
            state = true;
            break;
        case 'don\'t':
            state = false;
            break;
        default:
            break;
    }
}

console.log(`Simple accumulator: ${simpleAccumulator}`);
console.log(`Logical accumulator: ${logicalAccumulator}`);
