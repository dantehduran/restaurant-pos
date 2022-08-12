<template>
	<div class="w-full min-h-full absolute top-0 left-0 flex" v-if="active">
		<div
			class="backdrop-blur-sm bg-gray-600/30 flex-1 min-h-full"
			@click="changeBackdrop"
		></div>
		<slot />
	</div>
</template>
<script setup lang="ts">
const props = defineProps<{
	changeBackdrop: () => void;
	active: boolean;
}>();
const { active } = toRefs(props);
</script>
