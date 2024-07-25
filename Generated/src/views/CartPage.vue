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
		
		
		<Container spacing='15.0' alignment='vertical'>
			
			
			<Container spacing='10.0' alignment='horizontal'>
					
					
					<Text value="Product 1" fontSize="20px" />
					
					
					<Text value="Quantity : 1" fontSize="16px" />
					
					
					<Text value="Price: 100000FCFA" fontSize="16px" />
					
					
					<Button text="Remove" />
			</Container>
			
			
			
			<Container spacing='10.0' alignment='horizontal'>
					
					
					<Text value="Product 2" fontSize="20px" />
					
					
					<Text value="Quantity : 2" fontSize="16px" />
					
					
					<Text value="Price: 125000FCFA" fontSize="16px" />
					
					
					<Button text="Remove" />
			</Container>
			
				
				
				<Text value="Your Cart" fontSize="32px" />
				
				
				<Text value="Total: 225000FCFA" fontSize="20px" />
				
				
				<Button text="Checkout" />
		</Container>
		
</template>
