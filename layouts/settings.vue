<template>
	<div class="flex w-full min-h-full font-sans bg-gray-800">
		<Sidebar />
		<main class="flex-1">
			<div class="flex flex-col gap-4 p-4 flex-1">
				<header>
					<h1 class="text-3xl font-semibold leading-loose text-white">
						Settings
					</h1>
				</header>
				<div class="flex gap-x-6">
					<div class="">
						<div class="flex flex-col rounded-lg sticky top-4">
							<button
								v-for="item in submenu"
								class="flex py-6 px-8 gap-x-2 first:rounded-t-lg last:rounded-b-lg relative"
								:class="
									route.name.toString().split('-').at(-1).includes(item.name)
										? 'bg-primary/20 text-primary after:w-1 after:h-10 after:bg-primary after:absolute after:rounded-full after:top-6 after:right-0'
										: 'text-white bg-gray-900'
								"
								@click="navigateTo('/settings' + item.path)"
							>
								<Icon :icon="item.icon" h="24" w="24" class="text-inherit" />
								<div class="flex flex-col">
									<span class="text-inherit text-start">{{ item.title }}</span>
									<span class="text-gray-500 text-sm">{{ item.subtitle }}</span>
								</div>
							</button>
						</div>
					</div>
					<div class="bg-gray-900 rounded-lg flex-1"><slot /></div>
				</div>
			</div>
		</main>
	</div>
</template>
<script setup lang="ts">
const route = useRoute();
const submenu = [
	{
		title: 'Appareance',
		subtitle: 'Dark and Light mode, Font size',
		icon: 'ant-design:heart-outlined',
		path: '/',
		name: 'settings',
	},
	{
		title: 'Product Management',
		subtitle: 'Manage your product, pricing, etc',
		icon: 'fluent:production-20-regular',
		path: '/products',
		name: 'products',
	},
	{
		title: 'Notifications',
		subtitle: 'Customize your notifications',
		icon: 'bx:bell',
		path: '/notifications',
		name: 'notifications',
	},
	{
		title: 'Security',
		subtitle: 'Configure Password, PIN, etc',
		icon: 'bx:lock',
		path: '/security',
		name: 'security',
	},
	{
		title: 'About Us',
		subtitle: 'Find out more about Posly',
		icon: 'clarity:exclamation-circle-line',
		path: '/about',
		name: 'about',
	},
];
</script>
