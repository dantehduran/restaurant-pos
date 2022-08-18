<template>
	<div class="sticky bg-gray-900 rounded-l-lg top-0 min-h-screen">
		<div class="flex flex-col gap-y-4 pt-6 px-4">
			<h3 class="text-white text-xl">Orders #312</h3>
			<div class="flex gap-x-2">
				<button
					@click="active = option"
					v-for="option in options"
					class="py-2 px-3 rounded-lg text-sm capitalize font-semibold border border-gray-600"
					:class="
						active === option
							? 'bg-primary text-white'
							: 'text-primary bg-inherit'
					"
				>
					{{ option }}
				</button>
			</div>
			<div class="flex gap-x-4 py-2 mb-2 border-b border-gray-600">
				<span class="flex-1 text-lg text-white">Item</span>
				<span class="text-lg text-white">Qty</span>
				<span class="text-lg text-white px-2">Price</span>
			</div>
			<div class="flex flex-col gap-y-2">
				<HomeCartItem />
				<HomeCartItem />
				<HomeCartItem />
			</div>
			<div class="flex justify-between items-center">
				<span class="text-sm text-gray-600">Discount</span>
				<span class="text-sm text-white text-right">$ 0</span>
			</div>
			<div class="flex justify-between items-center">
				<span class="text-sm text-gray-600">Sub total</span>
				<span class="text-sm text-white text-right">$ 21,03</span>
			</div>
			<button
				class="w-full text-center py-3 bg-primary text-white rounded-lg shadow-primary"
			>
				Continue to Payment
			</button>
		</div>
	</div>
</template>
<script setup lang="ts">
const active = ref('dine in');
const options = ['dine in', 'to go', 'delivery'];
</script>
