export default function sortStrings(data) {
    const dataToSort = [...data];
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let index = 0; index < dataToSort.length - 1; index += 1) {
            if (dataToSort[index].localeCompare(
                dataToSort[index + 1],
                "en",
                { sensitivity: "base" },
            ) > 0) {
                const x = dataToSort[index + 1];
                dataToSort[index + 1] = dataToSort[index];
                dataToSort[index] = x;
                sorted = false;
            }
        }
    }

    return dataToSort;
} 