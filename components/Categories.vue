<template>
	<div class="flex gap-x-6 items-center border-b border-gray-700">
		<button
			v-for="category in categories"
			@click="
				active = category;
				$emit('change', category);
			"
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
