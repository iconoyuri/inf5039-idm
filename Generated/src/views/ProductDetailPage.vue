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
			<Container spacing='20.0' alignment='vertical'>
					<Text value="User1: Great product!" fontSize="16px" />
					<Text value="User2: Highly recommend." fontSize="16px" />
				
			</Container>
			
				<Image source="productDetail.jpg" />
				<Text value="Product Name" fontSize="28px" />
				<Text value="Product Description" fontSize="18px" />
				<Text value="Price: 285150 FCFA" fontSize="20px" />
				<Button text="Add to Cart"/>
				<Button text="Go Back"/>
				<Text value="User Reviews" fontSize="24px" />
		</Container>
		
</template>
