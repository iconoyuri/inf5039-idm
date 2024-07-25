
<script setup>
	const props = defineProps(['href','text'])
</script>

<template>
  <a :href="href">{{ text }}</a>
</template>

<style scoped>

</style>
