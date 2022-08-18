<template>
	<div class="bg-gray-900 rounded-lg flex-1">
		<div class="flex flex-col gap-y-4 p-6">
			<div class="flex justify-between items-center pb-4">
				<h2 class="text-xl font-semibold leading-loose text-white">
					Product Management
				</h2>
				<div class="flex gap-x-4">
					<button
						class="flex py-3 px-4 rounded-lg border border-gray-700 gap-x-2.5"
					>
						<Icon
							icon="fluent:options-20-regular"
							h="20"
							w="20"
							class="text-white"
						/>
						<span class="text-sm text-white">Manage Categories</span>
					</button>
					<button
						@click="backdropStatus = true"
						class="flex w-40 items-center justify-center py-3 px-4 rounded-lg bg-primary shadow-primary text-white text-sm"
					>
						New Dish
					</button>
				</div>
			</div>
			<Categories />
			<div
				class="grid grid-cols-3 md:grid-cols-4 gap-2 max-h-[376px] overflow-auto"
			>
				<AddNew />
				<DishCard />
				<DishCard />
				<DishCard />
				<DishCard />
			</div>
			<Backdrop
				:active.sync="backdropStatus"
				@show="() => (backdropStatus = false)"
			>
				<div class="absolute top-0 right-0">
					<div class="w-96 bg-gray-900 min-h-screen">hello</div>
				</div>
			</Backdrop>
		</div>
	</div>
</template>
<script setup lang="ts">
const backdropStatus = ref(false);
</script>
