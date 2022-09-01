<template>
	<div class="flex gap-6">
		<div
			v-for="stat in stats"
			class="flex flex-col p-4 w-1/3 bg-gray-900 rounded-lg gap-y-3"
		>
			<div class="flex items-center gap-x-3">
				<div class="p-2 bg-gray-800 rounded-lg">
					<Icon :icon="stat.icon" h="24" w="24" :class="stat.color" />
				</div>
				<span
					class="text-xs font-medium"
					:class="stat.status === 'up' ? 'text-emerald-400' : 'text-rose-400'"
					>{{ stat.percentage }}</span
				>
				<div
					class="p-0.5 rounded-full"
					:class="stat.status === 'up' ? 'bg-emerald-400/20' : 'bg-rose-400/20'"
				>
					<Icon
						:icon="
							stat.status === 'up'
								? 'akar-icons:arrow-up'
								: 'akar-icons:arrow-down'
						"
						:class="stat.status === 'up' ? 'text-emerald-400' : 'text-rose-400'"
						h="14"
						w="14"
					/>
				</div>
			</div>
			<div class="text-3xl font-semibold text-white">{{ stat.value }}</div>
			<div class="text-sm tracking-wide text-gray-500">{{ stat.title }}</div>
		</div>
	</div>
</template>
<script setup lang="ts">
const stats = [
	{
		title: 'Total Revenue',
		percentage: '+32.46',
		value: '$10,232.00',
		status: 'up',
		icon: 'iconoir:coin',
		color: 'text-purple-400',
	},
	{
		title: 'Total Dish Ordered',
		percentage: '-12.40%',
		value: '23,456',
		status: 'down',
		icon: 'bi:bookmark-dash',
		color: 'text-orange-400',
	},
	{
		title: 'Total Customer',
		percentage: '+2.40%',
		value: '1,234',
		status: 'up',
		icon: 'carbon:user-multiple',
		color: 'text-sky-400',
	},
];
</script>
