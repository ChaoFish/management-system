<template>
	<div class="footer fixed">
		<ul>
			<li v-bind:class="{'isIndex': isIndex}"><router-link to='/'>Home</router-link></li>
			<li v-bind:class="{'isManage': isManage}"><router-link to='/manage'>Persons Management</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "Footer",
		props: ['isIndex', 'isManage']
	}
</script>

<style scoped>
	li {font-size: 1.5em; font-weight: bold; color: }
	.footer {width: 100%; height: 50px; bottom: 0;}
	ul {display: flex; height: 100%; line-height: 50px;}
	ul li {flex: 1; background-color: #d3d3d3;}
	.isIndex {background-color: silver;}
	.isIndex a {color: #41b883;}
	.isManage {background-color: silver;}
	.isManage a {color: #41b883;}
</style>