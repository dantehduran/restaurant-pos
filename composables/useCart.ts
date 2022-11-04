interface CartItem {
	name: string;
	price: number;
	qty: number;
	id: string;
}
interface Cart {
	items: CartItem[];
	to: string;
	option: 'dine in' | 'delivery' | 'to go';
}
export const useCartStore = defineStore('cart', () => {
	const carts = ref<Cart[]>([]);
	const selectedCart = ref('');
	const indexCart = computed(() =>
		carts.value.findIndex((cart) => cart.to === selectedCart.value)
	);
	// const items = ref<CartItem[]>([]);
	const subtotal = computed(() =>
		carts.value[indexCart.value].items.reduce(
			(acc, item) => acc + item.price * item.qty,
			0
		)
	);
	const tax = computed(() => subtotal.value * 0.18);
	const total = computed(() => subtotal.value + tax.value);
	function addItem(newItem: CartItem) {
		carts.value[indexCart.value].items.push(newItem);
	}
	function removeItem(id: string) {
		const index = carts.value[indexCart.value].items.findIndex(
			(item) => item.id === id
		);
		carts.value[indexCart.value].items.splice(index, 1);
	}
	function plusOneQty(id: string) {
		carts.value[indexCart.value].items.find(
			(item) => item.id === id && (item.qty++, true)
		);
	}
	function minusOneQty(id: string) {
		carts.value[indexCart.value].items.find(
			(item) => item.id === id && item.qty > 0 && (item.qty--, true)
		);
	}

	return {
		subtotal,
		tax,
		total,
		addItem,
		removeItem,
		plusOneQty,
		minusOneQty,
	};
});
