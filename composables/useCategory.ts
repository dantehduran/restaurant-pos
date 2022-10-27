export const useCategoryStore = defineStore('categories', () => {
	const categories = ref([
		'hot dishes',
		'cold dishes',
		'soup',
		'grill',
		'appetizer',
		'dessert',
	]);
	function addCategory(newCategory: string) {
		categories.value.push(newCategory);
	}
	function editCategory(newValue: string) {
		categories.value.find(
			(category) => category === newValue && ((category = newValue), true)
		);
	}
	return { categories, addCategory, editCategory };
});
