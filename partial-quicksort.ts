function partialQuickSort<T>(a: T[], n: number, comparator: (a: T, b: T) => number): T[]
function partialQuickSort<T>(a: T[], n: number, comparator: (a: T, b: T) => number, low: number, high: number): T[]
function partialQuickSort<T>(a: T[], n: number, comparator: (a: T, b: T) => number, low: number = 0, high: number = a.length - 1): T[]
{
	const partition = (a: T[], low: number, high: number) =>
	{
		const pivot = a[high];
		let i = low - 1;

		for (let j = low; j <= high - 1; j++)
		{
			const compare = comparator(a[j], pivot);
			if (compare <= 0) // if a[j] <= pivot
			{
				i++;
				const temp = a[i];
				a[i] = a[j];
				a[j] = temp;
			}
		}

		const temp = a[i+1];
		a[i+1] = a[high];
		a[high] = temp;

		return i + 1;
	}

	if (low < high)
	{
		const partitionIndex = partition(a, low, high);
		partialQuickSort(a, n, comparator, low, partitionIndex - 1);

		if (partitionIndex < n-1)
			partialQuickSort(a, n, comparator, partitionIndex + 1, high);
	}

	return a;
}
