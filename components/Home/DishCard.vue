<template>
	<div
		class="relative w-full rounded-lg flex flex-col items-start py-4 px-6 gap-1.5 transition-colors ease-in-out duration-300"
		:class="qty > 0 ? 'bg-primary' : 'bg-gray-900'"
	>
		<div class="absolute w-2 h-full bg-primary left-0 top-0 rounded-l-lg"></div>
		<span class="text-white capitalize font-medium">{{ name }}</span>
		<span class="text-sm text-gray-200">${{ price }} </span>
		<div class="flex justify-end w-full items-center gap-x-2">
			<button
				class="p-2 border text-white rounded-lg"
				:class="qty > 0 ? 'border-gray-300' : 'border-gray-600'"
				@click="handleMinusButton()"
				:disabled="qty == 0"
			>
				<Icon icon="akar-icons:minus" w="12" h="12" />
			</button>
			<span class="text-white">{{ qty }}</span>
			<button
				class="p-2 border text-white rounded-lg"
				:class="qty > 0 ? 'border-gray-300' : 'border-gray-600'"
				@click="handlePlusButtom()"
			>
				<Icon icon="akar-icons:plus" w="12" h="12" />
			</button>
		</div>
	</div>
</template>
<script setup lang="ts">
const props = defineProps<{
	name: string;
	id: string;
	price: number;
}>();
const store = useCartStore();
const { addItem, removeItem, plusOneQty, minusOneQty } = store;
const { cart } = storeToRefs(store);

const qty = computed(() => {
	const index = cart.value.dishes.findIndex((i) => i.id === props.id);
	return index === -1 ? 0 : cart.value.dishes[index].qty;
});

const handlePlusButtom = () => {
	if (qty.value === 0) {
		addItem({ id: props.id, name: props.name, price: props.price, qty: 1 });
		return;
	}
	plusOneQty(props.id);
};

const handleMinusButton = () => {
	if (qty.value === 1) {
		removeItem(props.id);
		return;
	}
	minusOneQty(props.id);
};
</script>
