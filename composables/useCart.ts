const tables: Cart[] = [
	{
		to: 'table 1',
		option: 'dine in',
		dishes: [],
	},
	{
		to: 'table 2',
		option: 'dine in',
		dishes: [],
	},
	{
		to: 'table 3',
		option: 'dine in',
		dishes: [],
	},
	{
		to: 'table 4',
		option: 'dine in',
		dishes: [],
	},
	{
		to: 'table 5',
		option: 'dine in',
		dishes: [],
	},
];
export const useCartStore = defineStore('cart', () => {
	const carts = ref<Cart[]>(tables);
	const maxCarts = computed(() => carts.value.length);
	const indexCart = ref(0);
	const cart = computed(() => carts.value[indexCart.value]);
	const subtotal = computed(() =>
		carts.value[indexCart.value].dishes.reduce(
			(acc, item) => acc + item.price * item.qty,
			0
		)
	);
	const tax = computed(() => subtotal.value * 0.18);
	const total = computed(() => subtotal.value + tax.value);
	function addItem(newItem: CartItem) {
		carts.value[indexCart.value].dishes.push(newItem);
	}
	function removeItem(id: string) {
		const index = carts.value[indexCart.value].dishes.findIndex(
			(item) => item.id === id
		);
		carts.value[indexCart.value].dishes.splice(index, 1);
	}
	function plusOneQty(id: string) {
		carts.value[indexCart.value].dishes.find(
			(item) => item.id === id && (item.qty++, true)
		);
	}
	function minusOneQty(id: string) {
		carts.value[indexCart.value].dishes.find(
			(item) => item.id === id && item.qty > 0 && (item.qty--, true)
		);
	}

	return {
		subtotal,
		tax,
		total,
		cart,
		indexCart,
		maxCarts,
		addItem,
		removeItem,
		plusOneQty,
		minusOneQty,
	};
});
