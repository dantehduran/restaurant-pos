export const useDishesStore = defineStore('dishes', () => {
	const dishes = ref([
		{ id: '1', name: 'plate 1', price: '23.5', category: 'hot dishes' },
		{ id: '2', name: 'plate 2', price: '23.5', category: 'dessert' },
		{ id: '3', name: 'plate 3', price: '23.5', category: 'grill' },
		{ id: '4', name: 'plate 4', price: '23.5', category: 'soup' },
		{ id: '5', name: 'plate 5', price: '23.5', category: 'cold dishes' },
		{ id: '6', name: 'plate 6', price: '23.5', category: 'appetizer' },
		{ id: '7', name: 'plate 7', price: '23.5', category: 'hot dishes' },
		{ id: '8', name: 'plate 8', price: '23.5', category: 'hot dishes' },
		{ id: '9', name: 'plate 9', price: '23.5', category: 'hot dishes' },
	]);
	function newDish({ id, name, price, category }) {
		dishes.value.push({ id, name, price, category });
	}
	function editDish(id: String, newValues) {
		dishes.value.find(
			(dish) => dish.id === id && ((dish = { ...dish, ...newValues }), true)
		);
	}
	return { dishes, newDish, editDish };
});
