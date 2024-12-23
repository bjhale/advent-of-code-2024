import { assertEquals } from "jsr:@std/assert";

import { allIncreasing, allDecreasing, adjacentDifference } from "../lib/arrayValidation.ts";

Deno.test("Increasing Array of Numbers", () => {
    const array = [1, 2, 3, 4, 5];
    assertEquals(allIncreasing(array), true);
    assertEquals(allDecreasing(array), false);
});

Deno.test("Decreasing Array of Numbers", () => {
    const array = [5, 4, 3, 2, 1];
    assertEquals(allIncreasing(array), false);
    assertEquals(allDecreasing(array), true);
});

Deno.test("Mixed Array of Numbers", () => {
    const array = [1, 2, 3, 2, 1];
    assertEquals(allIncreasing(array), false);
    assertEquals(allDecreasing(array), false);
});

Deno.test("Increasing within bounds", () => {
    const array = [1, 2, 3, 4, 5];
    assertEquals(adjacentDifference(array, 1, 3), true);
});

Deno.test("Decreasing within bounds", () => {
    const array = [5, 4, 3, 2, 1];
    assertEquals(adjacentDifference(array, 1, 3), true);
});