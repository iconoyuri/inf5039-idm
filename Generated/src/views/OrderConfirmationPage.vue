<script setup>
import Container from '../components/Container.vue'
import Image from '../components/Image.vue'
import Text from '../components/Text.vue'
import TextField from '../components/TextField.vue'
import InputField from '../components/InputField.vue'
import Button from '../components/Button.vue'
import Link from '../components/Link.vue'
</script>

<template>
		<Container spacing='20.0' alignment='vertical'>
				<Text value="Thank You for Your Order!" fontSize="32px" />
				<Text value="Your order has been placed successfully." fontSize="20px" />
				<Text value="Order Number: #123456" fontSize="18px" />
				<Button text="Continue Shopping"/>
		</Container>
		
</template>
