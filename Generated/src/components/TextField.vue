
<script setup>
	const props = defineProps(['label', 'value'])
</script>

<template>
  <label> {{ label }}
  	<input type="textfield" :placeholder="value" />
  </label>
</template>

<style scoped>

</style>
