interface OrderItem {
	name: string;
	price: number;
	qty: number;
	id: string;
}
interface Order {
	to: string;
	dishes: OrderItem[];
	option: 'dine in' | 'to go' | 'delivery';
	subtotal: number;
	tax: number;
	total: number;
}
export const useOrderStore = defineStore('orders', () => {
	const orders = ref<Order[]>([]);
	function addOrder(newOrder: Order) {
		orders.value.push(newOrder);
	}
	function removeOrder(id: string) {
		const index = orders.value.findIndex((item) => item.to === id);
		orders.value.splice(index, 1);
	}
	return { orders, addOrder, removeOrder };
});
