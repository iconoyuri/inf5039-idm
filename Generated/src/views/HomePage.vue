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
			
			
			<Container spacing='0.0' alignment='vertical'>
					
					
					<TextField value="Suggestions" label="Suggestions" maxLines="0" indication="" />
			</Container>
			
				
				
				<Text value="" fontSize="32px" />
				
				
				<Image source="banner.jpg" />
				
				
				<Button text="Shop Now" />
				
				
				<Button text="Login" />
				
				
				<Button text="Register" />
				
				
				<Link text="Return home" href="" />
		</Container>
		
</template>
