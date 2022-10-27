<template>
	<div class="flex flex-col gap-y-4 p-4">
		<div class="flex justify-between items-center pb-4">
			<h2 class="text-3xl font-semibold leading-loose text-white">
				Product Management
			</h2>
			<div class="flex gap-x-4">
				<button
					@click="categoriesBackdrop = true"
					class="flex py-3 px-4 rounded-lg border border-gray-700 gap-x-2.5"
				>
					<Icon
						icon="fluent:options-20-regular"
						h="20"
						w="20"
						class="text-white"
					/>
					<span class="text-sm text-white">Manage Categories</span>
				</button>
				<button
					@click="newDishBackdrop = true"
					class="flex w-40 items-center justify-center py-3 px-4 rounded-lg bg-primary shadow-primary text-white text-sm"
				>
					New Dish
				</button>
			</div>
		</div>
		<Categories @change="(newCategory) => (activeCategory = newCategory)" />
		<div class="grid grid-cols-4 md:grid-cols-6 gap-2">
			<DishCard
				v-for="dish in filteredDishes"
				:name="dish.name"
				:price="dish.price"
				:key="dish.id"
			/>
		</div>
		<Backdrop
			:active.sync="newDishBackdrop"
			@show="() => (newDishBackdrop = false)"
		>
			<div class="absolute top-0 right-0">
				<div class="w-96 bg-gray-900 min-h-screen">
					<DishNewForm @complete="() => (newDishBackdrop = false)" />
				</div>
			</div>
		</Backdrop>
		<Backdrop
			:active.sync="categoriesBackdrop"
			@show="() => (categoriesBackdrop = false)"
		>
			<div class="absolute top-0 right-0">
				<div class="w-96 bg-gray-900 min-h-screen">
					<ManageCategories @complete="() => (categoriesBackdrop = false)" />
				</div>
			</div>
		</Backdrop>
	</div>
</template>
<script setup lang="ts">
const store = useDishesStore();
const { dishes } = storeToRefs(store);
const newDishBackdrop = ref(false);
const categoriesBackdrop = ref(false);
const activeCategory = ref('hot dishes');

const filteredDishes = computed(() => {
	return dishes.value.filter((dish) => dish.category === activeCategory.value);
});
</script>
