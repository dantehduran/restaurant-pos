<template>
	<div class="flex flex-col p-4 gap-y-4">
		<header>
			<h1 class="text-3xl font-semibold leading-loose text-white">Orders</h1>
		</header>
		<hr class="border-gray-700" />
		<section class="flex gap-x-4">
			<div
				v-for="(column, columnIndex) in newColumns"
				:key="columnIndex"
				class="flex flex-col gap-y-4 flex-grow max-h-max"
			>
				<div v-for="itemIndex in column" :key="itemIndex">
					<OrderCard
						:key="filteredOrders[itemIndex].id"
						v-bind="filteredOrders[itemIndex]"
					/>
				</div>
			</div>
		</section>
	</div>
</template>
<script setup lang="ts">
const orderStore = useOrderStore();
const { orders } = storeToRefs(orderStore);
const filteredOrders = computed(() =>
	orders.value.filter((order) => order.ready === false)
);
const columns = ref(3);
const { newColumns } = useMasonry(columns, filteredOrders);
</script>
