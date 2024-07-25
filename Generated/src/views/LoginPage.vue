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
				
				
				<Text value="Login" fontSize="32px" />
				<Form>
							
							
							<InputField value="Email" label="" type="email" indication="" />
							
							
							<InputField value="" label="Password" type="password" indication="" />
							
							
							<InputField value="" label="ConfirmPassword" type="password" indication="" />
							
							
							<Button text="Login" />
				</Form>
				
				
				<Button text="Back to Home" />
		</Container>
		
</template>
