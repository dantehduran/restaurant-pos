<template>
	<div class="flex flex-col gap-y-4 items-center py-4 w-24 bg-gray-900">
		<button class="p-2 bg-opacity-20 rounded-xl bg-primary">
			<Icon class="text-primary" icon="bxs:store-alt" h="40" w="40" />
		</button>
		<div class="flex flex-col gap-y-2 items-end self-end">
			<div
				v-for="menu in Menus"
				:class="
					activeMenu === menu.name
						? 'bg-gray-800 rounded-l-xl relative before:shadow-inverse-top before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 after:shadow-inverse-bottom after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 '
						: ''
				"
			>
				<button
					class="p-4 my-4 mr-4 ml-3 rounded-xl"
					@click="activeMenu = menu.name"
					:class="
						activeMenu === menu.name
							? 'text-white shadow-primary bg-primary'
							: 'text-primary'
					"
				>
					<Icon class="fill-current" :icon="menu.icon" h="24" w="24" />
				</button>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
const Menus = [
	{ name: 'dashboard', icon: 'cil:home' },
	{ name: 'discounts', icon: 'tabler:discount-2' },
	{ name: 'graph', icon: 'ant-design:pie-chart-outlined' },
	{ name: 'messages', icon: 'fe:mail' },
	{ name: 'settings', icon: 'ep:setting' },
];
const activeMenu = ref('graph');
</script>
