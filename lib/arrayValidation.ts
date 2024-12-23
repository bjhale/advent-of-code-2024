
export function allIncreasing(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            return false;
        }
    }
    return true;
}

export function allDecreasing(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1]) {
            return false;
        }
    }
    return true;
}

export function adjacentDifference(arr: number[], min: number, max: number): boolean {
    for (let i = 1; i < arr.length; i++) {
        if (Math.abs(arr[i] - arr[i - 1]) < min || Math.abs(arr[i] - arr[i - 1]) > max) {
            return false;
        }
    }
    return true;
}