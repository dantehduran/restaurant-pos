<template>
	<div class="w-full flex flex-col gap-y-2">
		<div class="flex gap-x-4 items-center">
			<div class="h-10 w-10 rounded-full bg-slate-700"></div>
			<div class="flex-1">
				<p class="capitalize text-white text-sm truncate overflow-hidden w-28">
					spicy seasoned sea food food food
				</p>
				<p class="text-gray-600 text-sm">$2,29</p>
			</div>
			<input
				type="text"
				value="0"
				class="bg-gray-800 text-white w-12 py-3 rounded-lg text-center"
			/>
			<span class="text-white">$42,58</span>
		</div>
		<div class="flex gap-x-4 items-center">
			<input
				type="text"
				placeholder="Order Note ..."
				class="bg-gray-800 text-white w-full py-3 rounded-lg text-left px-3"
			/>
			<button class="p-3 border border-primary rounded-lg">
				<Icon
					w="20"
					h="20"
					class="text-primary"
					icon="fluent:delete-20-regular"
				/>
			</button>
		</div>
	</div>
</template>
