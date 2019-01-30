# partial-quicksort
A partial quicksort implementation in TypeScript

Partial sorting finds the first N sorted elements in a list.  So if you only care about
the "top 10" or "top N" items, this can be a more efficient solution than sorting the entire dataset.

Example usage:

    partialQuickSort([9,8,7,6,5,4,3,2,1,0], 2, (a, b) => (a < b ? -1 : b < a ? 1 : 0))
    // Outputs [0, 1, 7, 6, 5, 4, 3, 2, 8, 9]
