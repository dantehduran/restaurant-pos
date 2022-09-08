<template>
	<div class="flex flex-col gap-y-4 p-4">
		<h4 class="text-white text-lg">New Dish</h4>
		<Input label="Name" autocomplete="nope" type="text" v-model="name" />
		<Input
			label="Price"
			type="number"
			min="0"
			step="0.01"
			v-model.number="price"
		/>
		<div class="flex flex-wrap gap-2">
			<button
				v-for="category in categories"
				@click="active = category"
				class="py-2 px-3 rounded-lg text-sm capitalize font-semibold border border-gray-600"
				:class="
					active === category
						? 'bg-primary text-white'
						: 'text-primary bg-inherit'
				"
			>
				{{ category }}
			</button>
		</div>
		<button
			class="flex w-full items-center justify-center py-3 px-4 rounded-lg bg-primary shadow-primary text-white text-sm"
			@click="
				() => {
					dishesStore.newDish({ name, price, category: active });
					$emit('complete');
				}
			"
		>
			Add New Dish
		</button>
	</div>
</template>
<script setup lang="ts">
const name = ref('');
const price = ref(0);
const active = ref('hot dishes');
const store = useCategoryStore();
const dishesStore = useDishesStore();
const { categories } = storeToRefs(store);
defineEmits(['complete']);
</script>
