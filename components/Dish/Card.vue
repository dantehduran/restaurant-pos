<template>
	<div class="w-full rounded-lg flex flex-col items-start bg-gray-900">
		<div class="flex flex-col items-start py-4 px-6 gap-1.5">
			<span class="text-white capitalize font-medium">{{ name }}</span>
			<span class="text-sm text-gray-200">${{ price }}</span>
		</div>

		<button
			class="w-full rounded-b-lg bg-primary/20 flex justify-center items-center py-2 gap-x-2"
		>
			<Icon w="18" h="18" class="text-primary" icon="ep:edit-pen" />
			<span class="text-primary text-sm">Edit Dish</span>
		</button>
	</div>
</template>
<script setup lang="ts">
defineProps<{ name: String; price: String }>();
</script>
