<template>
	<div class="p-6 bg-gray-900 rounded-lg">
		<div class="flex justify-between items-center pb-4">
			<h2 class="text-left text-xl font-semibold leading-loose text-white">
				Order Report
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
				<span class="text-sm text-white">Filter Order</span>
			</button>
		</div>
		<table class="w-full">
			<thead class="text-sm font-semibold text-white">
				<td class="py-4 border-b border-gray-700">Customer</td>
				<td class="py-4 border-b border-gray-700">Menu</td>
				<td class="py-4 border-b border-gray-700 text-right">Total Payment</td>
				<td class="py-4 border-b border-gray-700 text-center">Status</td>
			</thead>
			<tbody>
				<tr class="text-sm text-gray-400" v-for="order in orders">
					<td class="py-4">{{ order.name }}</td>
					<td class="py-4">{{ order.menu }}</td>
					<td class="py-4 tabular-nums text-right">{{ order.total }}</td>
					<td class="py-4 flex justify-center">
						<span
							class="py-1 w-24 font-medium capitalize rounded-full justify-center text-center"
							:class="{
								'bg-emerald-400/20 text-emerald-500':
									order.status === 'completed',
								'bg-purple-400/20 text-purple-500':
									order.status === 'preparing',
								'bg-orange-400/20 text-orange-500': order.status === 'pending',
							}"
						>
							{{ order.status }}
						</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script setup lang="ts">
const orders = [
	{
		name: 'Eren Jaegar',
		menu: 'Spicy seasoned seafood noodles',
		total: '$125',
		status: 'completed',
	},
	{
		name: 'Reiner Braunn',
		menu: 'Salted Pasta with mushroom sauce',
		total: '$145',
		status: 'preparing',
	},
	{
		name: 'Levi Ackerman',
		menu: 'Beef dumpling in hot and sour soup',
		total: '$105',
		status: 'pending',
	},
	{
		name: 'Historia Reiss',
		menu: 'Hot spicy fried rice with omelet',
		total: '$45',
		status: 'completed',
	},
	{
		name: 'Armin Arlert',
		menu: 'Spicy seasoned seafood noodles',
		total: '$125',
		status: 'completed',
	},
	{
		name: 'Hanji Zoe',
		menu: 'Hot spicy fried rice with omelet',
		total: '$245',
		status: 'completed',
	},
];
</script>
