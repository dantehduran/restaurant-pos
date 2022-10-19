<template>
	<div class="flex flex-col p-4 gap-y-4">
		<header>
			<h1 class="text-3xl font-semibold leading-loose text-white">Orders</h1>
		</header>
		<hr class="border-gray-700" />
		<div class="grid grid-flow-row-dense grid-cols-4 gap-4">
			<div v-for="order in filteredOrders">
				<Order :key="order.to" v-bind="order" />
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
const orderStore = useOrderStore();
const { orders } = storeToRefs(orderStore);
const filteredOrders = computed(() =>
	orders.value.filter((order) => order.ready === false)
);
</script>
