export {};
declare global {
	type Options = 'dine in' | 'to go' | 'delivery';
	interface CartItem {
		name: string;
		price: number;
		qty: number;
		id: string;
	}
	interface Cart {
		dishes: CartItem[];
		to: string;
		option: Options;
	}
	interface Order extends Cart {
		id: string;
		subtotal: number;
		tax: number;
		total: number;
		ready: boolean;
	}
}
