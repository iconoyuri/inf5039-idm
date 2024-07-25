
<script setup>
	const props = defineProps(['spacing', 'alignment'])
	const spacing = props.spacing + 'px';
</script>

<template>
	<div :class="{
			horizontal : alignment == 'horizontal',
			vertical : alignment == 'vertical'
			}">
		<slot></slot>
	</div>
</template>

<style scoped>
	div {
		display: flex;
		gap: v-bind(spacing);
	}
		div.horizontal {
		flex-direction : row;
	}
	div.vertical {
		flex-direction : column;
	}
</style>
