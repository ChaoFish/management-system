<template>
	<div>
	<h1>
		Welcome to Persons Management System
	</h1>
	<Footer v-bind:isIndex="true"></Footer>
	</div>
</template>

<script>
	import Footer from "../../components/footer"
	export default {
		components: { Footer }
	}
</script>