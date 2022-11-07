export const useOrderStore = defineStore('orders', () => {
	const orders = ref<Order[]>([]);
	function addOrder(newOrder: Order) {
		orders.value.push(newOrder);
	}
	function removeOrder(id: string) {
		const index = orders.value.findIndex((item) => item.id === id);
		orders.value.splice(index, 1);
	}
	function readyToPay(id: string) {
		orders.value.find((item) => item.id === id && ((item.ready = true), true));
	}
	return { orders, addOrder, removeOrder, readyToPay };
});
