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
		if (categories.value.includes(newCategory)) return;
		categories.value.push(newCategory);
	}
	function editCategory(newValue: string) {
		if (categories.value.includes(newValue)) return;
		categories.value.find(
			(category) => category === newValue && ((category = newValue), true)
		);
	}
	function removeCategory(category: string) {
		const index = categories.value.findIndex((cat) => cat === category);
		categories.value.splice(index, 1);
	}
	return { categories, addCategory, editCategory, removeCategory };
});
