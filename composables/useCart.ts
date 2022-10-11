interface CartItem {
	name: string;
	price: number;
	qty: number;
	id: string;
}
export const useCartStore = defineStore('cart', () => {
	const items = ref<CartItem[]>([]);
	const subtotal = computed(() =>
		items.value.reduce((acc, item) => acc + item.price * item.qty, 0)
	);
	const tax = computed(() => subtotal.value * 0.18);
	const total = computed(() => subtotal.value + tax.value);
	function addItem(newItem: CartItem) {
		items.value.push(newItem);
	}
	function removeItem(id: string) {
		const index = items.value.findIndex((item) => item.id === id);
		items.value.splice(index, 1);
	}
	function plusOneQty(id: string) {
		items.value.find((item) => item.id === id && (item.qty++, true));
	}
	function minusOneQty(id: string) {
		items.value.find(
			(item) => item.id === id && item.qty > 0 && (item.qty--, true)
		);
	}

	return {
		items,
		subtotal,
		tax,
		total,
		addItem,
		removeItem,
		plusOneQty,
		minusOneQty,
	};
});
