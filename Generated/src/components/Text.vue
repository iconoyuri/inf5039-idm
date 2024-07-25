
<script setup>
	const props = defineProps(['value','fontSize'])
	const fontSize = props.fontSize + 'px'
</script>

<template>
    <p>{{ value }}</p>
</template>

<style scoped>
p{
	font-size: v-bind(fontSize);
}
</style>
