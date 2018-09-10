export function* bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j].value > array[j + 1].value) {
                yield move(array, j, j + 1);
            }
        }
    }
}