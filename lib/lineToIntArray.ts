export default function lineToIntArray(line: string): number[] {
    // Split the line by spaces
    const items = line.split(/\s+/);

    // Convert each item to an integer and return
    return items.map(x => parseInt(x));
}