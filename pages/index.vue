<template>
	<div class="flex gap-x-2">
		<div class="flex flex-col gap-6 p-4 flex-1">
			<div class="flex justify-between items-center">
				<header>
					<h1 class="text-3xl font-semibold leading-loose text-white">
						Restaurant Name
					</h1>
					<div class="text-gray-300">Friday 5 Aug, 2022</div>
				</header>
				<div class="relative">
					<span class="absolute inset-y-0 left-0 flex items-center pl-3">
						<Icon icon="eva:search-fill" h="18" w="18" class="text-white" />
					</span>
					<input
						type="text"
						placeholder="Search for food, coffee, etc"
						class="p-3 pl-9 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none"
					/>
				</div>
			</div>
			<Categories @change="(newCategory) => (activeCategory = newCategory)" />
			<div class="grid grid-cols-4 gap-3">
				<HomeDishCard
					v-for="dish in filteredDishes"
					:name="dish.name"
					:price="dish.price"
					:id="dish.id"
				/>
			</div>
		</div>
		<aside class="w-1/3 relative">
			<HomeCart />
		</aside>
	</div>
</template>
<script setup lang="ts">
const activeCategory = ref('hot dishes');
const dishesStore = useDishesStore();
const { dishes } = storeToRefs(dishesStore);
const filteredDishes = computed(() => {
	return dishes.value.filter((dish) => dish.category === activeCategory.value);
});
</script>
