<template>
	<div class="flex min-w-full min-h-full font-sans bg-gray-800">
		<Sidebar />
		<main class="flex-1 bg-gray-800">
			<div class="flex flex-col gap-4 p-4 flex-1">
				<header>
					<h1
						class="text-3xl font-semibold leading-loose text-white capitalize"
					>
						Settings
					</h1>
				</header>
				<div class="flex gap-x-6">
					<Submenu />
					<div class="bg-gray-900 rounded-lg flex-1"><slot /></div>
				</div>
			</div>
		</main>
	</div>
</template>
<script setup lang="ts">
const route = useRoute();
</script>
