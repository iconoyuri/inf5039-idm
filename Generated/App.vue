
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

<nav>
	<p>ECommerceApp</p>
	<ul>
		<li>
			<RouterLink to="/HomePage">HomePage</RouterLink>
		</li>
		


		<li>
			<RouterLink to="/RegisterPage">RegisterPage</RouterLink>
		</li>
		


		<li>
			<RouterLink to="/LoginPage">LoginPage</RouterLink>
		</li>
		


		<li>
			<RouterLink to="/ProductListPage">ProductListPage</RouterLink>
		</li>
		


		<li>
			<RouterLink to="/ProductDetailPage">ProductDetailPage</RouterLink>
		</li>
		


		<li>
			<RouterLink to="/CartPage">CartPage</RouterLink>
		</li>
		


		<li>
			<RouterLink to="/CheckoutPage">CheckoutPage</RouterLink>
		</li>
		


		<li>
			<RouterLink to="/OrderConfirmationPage">OrderConfirmationPage</RouterLink>
		</li>
		

	</ul>
</nav>

<RouterView />
</template>


