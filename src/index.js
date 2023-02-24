import sortStrings from "./modules/quicksort.js";

const unsorted = ["These", "Words", "are", "Not", "sorted"];
const sorted = sortStrings(unsorted);

console.log("Unsorted: ", unsorted);
console.log("Sorted: ", sorted);