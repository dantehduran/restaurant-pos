<template>
	<div class="flex flex-col gap-y-4 p-4">
		<header>
			<h1 class="text-3xl font-semibold leading-loose text-white">Settings</h1>
		</header>
		<section class="flex flex-col p-4 bg-gray-900 rounded-lg">
			<div class="flex gap-x-2 items-center">
				<span class="text-white capitalize basis-1/4">Numbers of tables</span>
				<div class="flex-1 flex items-center justify-start">
					<div class="flex justify-start w-full items-center gap-x-2">
						<button
							class="p-2 border text-white rounded-lg"
							:class="nTables > 0 ? 'border-gray-300' : 'border-gray-600'"
							@click="nTables--"
							:disabled="nTables == 0"
						>
							<Icon icon="akar-icons:minus" w="12" h="12" />
						</button>
						<span class="text-white">{{ nTables }}</span>
						<button
							class="p-2 border text-white rounded-lg"
							:class="nTables > 0 ? 'border-gray-300' : 'border-gray-600'"
							@click="nTables++"
						>
							<Icon icon="akar-icons:plus" w="12" h="12" />
						</button>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script setup lang="ts">
const nTables = ref(5);
</script>
