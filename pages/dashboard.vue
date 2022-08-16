<template>
	<div class="flex">
		<div class="flex flex-col gap-6 p-4 flex-1">
			<header>
				<h1
					class="text-3xl font-semibold leading-loose text-white"
					@click="backdropStatus = true"
				>
					Dashboard
				</h1>
				<div class="text-gray-300">Friday 5 Aug, 2022</div>
			</header>
			<hr class="border-gray-700" />
			<StatsCard />
			<OrderReport />
		</div>
		<aside class="flex flex-col gap-y-6 pt-6 pr-6 w-96">
			<MostOrdered />
		</aside>
	</div>
</template>
<script setup lang="ts">
const backdropStatus = ref(false);
</script>
