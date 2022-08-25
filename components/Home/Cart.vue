<template>
	<div class="bg-gray-900 rounded-l-lg max-h-screen sticky top-0">
		<div class="flex flex-col gap-y-4 px-4 min-h-screen">
			<div class="bg-gray-900 flex flex-col gap-y-4 mt-6">
				<h3 class="text-white text-xl">Table 4</h3>
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
			</div>
			<div
				class="flex flex-col max-h-[50%] gap-y-2 overflow-y-auto scrollbar-hide"
			>
				<HomeCartItem />
				<HomeCartItem />
				<HomeCartItem />
				<!-- <HomeCartItem />
				<HomeCartItem />
				<HomeCartItem />
				<HomeCartItem /> -->
			</div>
			<div class="bg-gray-900 flex flex-col gap-y-4 py-4 mt-auto">
				<div class="flex justify-between items-center">
					<span class="text-sm text-gray-600">Tax</span>
					<span class="text-sm text-white text-right">$ 0</span>
				</div>
				<div class="flex justify-between items-center">
					<span class="text-sm text-gray-600">Sub total</span>
					<span class="text-sm text-white text-right">$ 21,03</span>
				</div>
				<button
					class="w-full text-center py-3 bg-primary text-white rounded-lg shadow-primary"
				>
					Place Order
				</button>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
const active = ref('dine in');
const options = ['dine in', 'to go', 'delivery'];
</script>
