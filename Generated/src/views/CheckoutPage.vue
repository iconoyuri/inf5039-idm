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
				
				
				<Text value="Checkout" fontSize="32px" />
				<Form>
							
							
							<InputField value="" label="" type="text" indication="" />
							
							
							<InputField value="" label="Shipping Address" type="text" indication="" />
							
							
							<InputField value="" label="Credit Card Number" type="text" indication="" />
							
							
							<Button text="Place Order" />
				</Form>
				
				
				<Button text="Go Back" />
		</Container>
		
</template>
