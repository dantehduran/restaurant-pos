<template>
	<div>
		<label class="block mb-2 text-sm font-medium text-gray-300">{{
			label
		}}</label>
		<input
			v-bind="$attrs"
			class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
		/>
	</div>
</template>
<script setup lang="ts">
defineProps<{ label: string }>();
</script>
<script lang="ts">
export default {
	inheritAttrs: false,
};
</script>
