<template>
	<NuxtLayout
		:name="route.name.toString().includes('settings') ? 'settings' : null"
	>
		<NuxtPage />
	</NuxtLayout>
</template>
<script setup lang="ts">
const route = useRoute();
definePageMeta({ layout: false });
</script>
