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
				
				
				<Text value="Register" fontSize="32px" />
				<Form>
							
							
							<InputField value="" label="Username" type="text" indication="" />
							
							
							<InputField value="" label="Email" type="email" indication="" />
							
							
							<InputField value="" label="Password" type="password" indication="" />
							
							
							<Button text="Sign Up" />
				</Form>
				
				
				<Button text="Back to Home" />
		</Container>
		
</template>
