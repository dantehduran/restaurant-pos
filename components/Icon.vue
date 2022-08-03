<template>
	<Iconify :icon="icon" :class="class" :height="h" :width="w" />
</template>
<script setup lang="ts">
import { Icon as Iconify } from '@iconify/vue';
defineProps<{
	icon: string;
	class: string;
	w: string | number;
	h: string | number;
}>();
</script>
