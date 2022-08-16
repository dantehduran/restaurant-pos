<template>
	<div class="fixed inset-0 overflow-hidden z-20" v-if="active">
		<div
			class="backdrop-blur-sm bg-gray-600/30 absolute inset-0 z-40"
			@click="$emit('show')"
		></div>
		<div class="relative z-50">
			<slot />
		</div>
	</div>
</template>
<script setup lang="ts">
defineProps<{
	active: boolean;
}>();
</script>
