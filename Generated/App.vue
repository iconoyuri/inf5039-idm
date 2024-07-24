
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

<nav>
	<p>FrontendApp</p>
	<ul>
		<li>
			<RouterLink to="/Home">Home</RouterLink>
		</li>
		

		<li>
			<RouterLink to="/Login">Login</RouterLink>
		</li>
		
	</ul>
</nav>

<RouterView />
</template>


