<template>
	<div class="flex flex-col gap-y-4 p-4 max-h-screen">
		<h4 class="text-white text-lg">Manage Categories</h4>
		<div class="flex gap-x-1 items-end w-full">
			<Input
				label="Name"
				autocomplete="nope"
				type="text"
				v-model="newCategory"
			/>
			<button
				class="p-2 text-white bg-primary rounded-lg shadow-primary"
				@click="store.addCategory(newCategory.toLowerCase())"
			>
				<Icon icon="akar-icons:plus" w="26" h="26" />
			</button>
		</div>
		<ul class="flex flex-col gap-2 px-2 overflow-y-auto scrollbar-hide">
			<li
				v-for="cat in categories"
				:key="cat"
				class="text-white py-2 border-b border-gray-700"
			>
				<div class="flex justify-between items-center">
					<p class="capitalize">{{ cat }}</p>
					<button
						class="text-red-500"
						@click="store.removeCategory(cat.toLowerCase())"
					>
						<Icon icon="bx:x" h="20" w="20" />
					</button>
				</div>
			</li>
		</ul>
	</div>
</template>
<script setup lang="ts">
const newCategory = ref('');
defineEmits(['complete']);
const store = useCategoryStore();
const { categories } = storeToRefs(store);
</script>
