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
					<Image source="product1.jpg" />
					<Text value="Product 1" fontSize="20px" />
					<Text value="Price: 100000 FCFA" fontSize="18px" />
					<Button text="View Details"/>
			</Container>
			
			<Container spacing='10.0' alignment='horizontal'>
					<Image source="product2.jpg" />
					<Text value="Product 2" fontSize="20px" />
					<Text value="Price: 125000 FCFA" fontSize="18px" />
					<Button text="View Details"/>
			</Container>
			
				<Text value="" fontSize="32px" />
		</Container>
		
</template>
