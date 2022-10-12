<template>
	<div class="w-full flex flex-col gap-y-2 p-2 bg-gray-800 rounded-lg">
		<div class="flex gap-x-4 items-center px-1">
			<button
				class="p-3 border border-primary rounded-lg hover:bg-primary hover:text-white text-primary hover:border-gray-600"
				@click="removeItem(id)"
			>
				<Icon w="20" h="20" icon="fluent:delete-20-regular" />
			</button>
			<div class="w-48 mr-auto">
				<p class="capitalize text-white text-sm truncate overflow-hidden">
					{{ name }}
				</p>
				<p class="text-gray-600 text-sm">${{ price }}</p>
			</div>
			<span class="text-gray-300 text-sm text-center">x{{ qty }}</span>
			<span class="text-white">${{ (price * qty).toFixed(2) }}</span>
		</div>
	</div>
</template>
<script setup lang="ts">
defineProps<{
	id: string;
	name: string;
	price: number;
	qty: number;
}>();
const store = useCartStore();
const { removeItem } = store;
</script>
