import type { Ref } from 'vue';
export const useMasonry = (columns: Ref<number>, items: Ref<unknown[]>) => {
	const createNewColumns = (count: number): number[][] =>
		[...new Array(count)].map(() => []);
	const newColumns = computed(() => {
		const columnsDivs = createNewColumns(columns.value);
		items.value.forEach((_: unknown, i: number) =>
			columnsDivs[i % columns.value].push(i)
		);
		return columnsDivs;
	});
	return { newColumns };
};
