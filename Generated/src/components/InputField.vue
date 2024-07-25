
<script setup>
	const props = defineProps(['label','type','value'])
</script>

<template>
  <label> {{ label }} 
  	<input :type="type" :placeholder="value" />
  </label>
</template>

<style scoped>

</style>
