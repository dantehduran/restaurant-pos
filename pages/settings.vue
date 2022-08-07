<template>
	<div class="flex flex-col p-4 gap-6">
		<header>
			<h1 class="text-3xl font-semibold leading-loose text-white">Settings</h1>
		</header>
		<div class="flex gap-x-6 flex-1">
			<div class="bg-gray-900 flex flex-col rounded-lg">
				<button
					v-for="item in submenu"
					class="flex py-6 px-8 gap-x-2 first:rounded-t-lg last:rounded-b-lg relative"
					:class="
						item.title === active
							? 'bg-primary/20 text-primary after:w-1 after:h-10 after:bg-primary after:absolute after:top-6 after:right-0'
							: 'text-white'
					"
					@click="active = item.title"
				>
					<Icon :icon="item.icon" h="24" w="24" class="text-inherit" />
					<div class="flex flex-col">
						<span class="text-inherit text-start">{{ item.title }}</span>
						<span class="text-gray-500 text-sm">{{ item.subtitle }}</span>
					</div>
				</button>
			</div>
			<div class="bg-gray-900">yo2</div>
		</div>
	</div>
</template>
<script setup lang="ts">
const active = ref('Notifications');
const submenu = [
	{
		title: 'Appareance',
		subtitle: 'Dark and Light mode, Font size',
		icon: 'ant-design:heart-outlined',
	},
	{
		title: 'Product Management',
		subtitle: 'Manage your product, pricing, etc',
		icon: 'fluent:production-20-regular',
	},
	{
		title: 'Notifications',
		subtitle: 'Customize your notifications',
		icon: 'bx:bell',
	},
	{
		title: 'Security',
		subtitle: 'Configure Password, PIN, etc',
		icon: 'bx:lock',
	},
	{
		title: 'About Us',
		subtitle: 'Find out more about Posly',
		icon: 'clarity:exclamation-circle-line',
	},
];
</script>
