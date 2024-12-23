import { assertEquals } from "jsr:@std/assert";

import lineToIntArray from "../lib/lineToIntArray.ts";


Deno.test("lineToArray", () => {
    const line = "7 6 4 2 1";
    const result = lineToIntArray(line);
    assertEquals(result, [7, 6, 4, 2, 1]);
});