<template>
	<div class="flex flex-col gap-y-4 p-6">
		<div class="flex justify-between items-center pb-4">
			<h2 class="text-xl font-semibold leading-loose text-white">
				Product Management
			</h2>
			<button
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
		</div>
		<div class="flex gap-x-6 items-center border-b border-gray-700">
			<button
				v-for="category in categories"
				@click="active = category"
				class="capitalize font-medium pb-2"
				:class="
					active === category
						? 'text-primary border-b-2 border-primary'
						: 'text-white'
				"
			>
				{{ category }}
			</button>
		</div>
		<div class="grid grid-cols-4 gap-2">
			<AddNew />
			<AddNew />
			<AddNew />
			<AddNew />
			<AddNew />
			<AddNew />
			<AddNew />
			<AddNew />
		</div>
	</div>
</template>
<script setup lang="ts">
const active = ref('hot dishes');
const categories = [
	'hot dishes',
	'cold dishes',
	'soup',
	'grill',
	'appetizer',
	'dessert',
];
</script>
