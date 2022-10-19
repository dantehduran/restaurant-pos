<template>
	<div class="w-full bg-gray-900 rounded-lg p-4 flex flex-col gap-y-4">
		<div class="flex justify-between items-center">
			<h3 class="text-white text-lg font-semibold">{{ to }}</h3>
			<button
				class="p-2 border border-red-400 rounded-lg"
				@click="removeOrder(to)"
			>
				<Icon w="15" h="15" class="text-red-400" icon="ci:close-big" />
			</button>
		</div>
		<div class="flex flex-col gap-y-1.5">
			<div
				v-for="item in dishes"
				class="flex justify-between items-center rounded-lg bg-gray-800 px-3 py-2"
			>
				<span class="text-white capitalize">{{ item.name }}</span>
				<span class="text-white text-sm">x{{ item.qty }}</span>
			</div>
		</div>
		<div class="w-full flex gap-x-2">
			<button
				class="p-2 border border-orange-400 rounded-lg w-1/2 flex justify-center items-center"
			>
				<Icon w="15" h="15" class="text-orange-400" icon="ep:edit-pen" />
			</button>
			<button
				class="p-2 border border-green-400 rounded-lg w-1/2 flex justify-center items-center"
				@click="readyToPay(to)"
			>
				<Icon w="15" h="15" class="text-green-400" icon="bx:dollar" />
				<span class="text-green-400 text-sm">{{ total }}</span>
			</button>
		</div>
	</div>
</template>
<script setup lang="ts">
interface OrderItem {
	name: string;
	price: number;
	qty: number;
	id: string;
}
defineProps<{
	to: string;
	dishes: OrderItem[];
	option: 'dine in' | 'to go' | 'delivery';
	subtotal: number;
	tax: number;
	total: number;
}>();
const orderStore = useOrderStore();
const { removeOrder, readyToPay } = orderStore;
</script>
