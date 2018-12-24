<template>
	<div class="manage tc">
		<button v-on:click="inputName">Add</button>
		<div class="input-area" v-show="showInputBox">
			<input type="text" placeholder="Please enter a name" v-model="inputValue">
			<button v-on:click="addName">OK</button>
		</div>
		<table>
			<tr>
				<th>Name</th>
				<th>Operation</th>
			</tr>
			<tr v-for="(item, index) in people">
				<td>
					{{ item.name }}
				</td>
				<td v-bind:id="index"><span v-on:click="edit">Edit</span> <span v-on:click="delName">Delete</span></td>
			</tr>
		</table>
		<div class="wrap" v-show="showEdit">
			<div class="content">
				<input type="text" placeholder="Please enter a new name" v-model="newName">
				<button v-on:click="cancel">cancel</button>
				<button v-on:click="editName">ok</button>
			</div>
		</div>
		<Footer v-bind:isManage="true"></Footer>
	</div>
</template>

<script>
	import Footer from "../../components/footer"
	export default {
		data: function() {
			return {
				people: [{"name": "Jack"}, {"name": "Joe"}],
				showInputBox: false,
				inputValue: "",
				showEdit: false,
				newName: "",
				editId: 0
			}
		},
		methods: {
			inputName: function() {
				this.showInputBox = true
			},
			addName: function() {
				var addPerson = {}
				if (this.inputValue.trim() == "") {
					alert("please input a name")
				}
				else {
					addPerson.name = this.inputValue
					this.people.push(addPerson)
				}
			},
			delName: function(event) {
				var id = event.target.parentNode.id
				this.people.splice(id, 1)
			},
			edit: function(event) {
				this.editId = event.target.parentNode.id
				this.showEdit = true
				this.newName = this.people[this.editId].name
			},
			cancel: function() {
				this.showEdit = false
			},
			editName: function() {
				if (this.newName.trim() == "") {
					alert("Please input a name")
				}
				else {
					this.people[this.editId].name = this.newName
					this.showEdit = false
				}
			}
		},
		components: { Footer }
	}
</script>

<style scoped>
	.manage button:first-child {width: 50%; height: 40px; background-color: #41b883; border-style: none; border-radius: 5px; color: white; font-weight: bold; font-size: 1.2em; margin-bottom: 15px;}
	.input-area input {width: 200px; height: 30px; border-radius: 5px; font-size: 0.9em; vertical-align: middle;}
	.input-area button {width: 10%; height: 32px; background-color: #41b883; border-style: none; border-radius: 4px; color: white; font-weight: bold; font-size: 0.9em; margin-bottom: 15px;}
	table {position: relative; margin: 0 auto; width: 80%;}
	td, th {width: 50%;}
	span {margin: 0 5px; cursor: pointer;}
	span:hover {color: #41b883;}
	.wrap {background-color: rgba(0, 0, 0, 0.7); width: 100%; height: 100%; z-index: 2; position: absolute; left: 0; top: 0;}
	.content {z-index: 3; width: 200px; height: 100px; position: absolute; left: 0; right: 0; top: 0; bottom: 0; margin: auto;}
	.content input {width: 200px; height: 30px; border-radius: 5px; font-size: 0.9em; vertical-align: middle;}
	.content button {width: 30%; height: 25px; background-color: #41b883; border-style: none; border-radius: 4px; color: white; font-weight: bold; font-size: 0.9em; margin: 15px 0;}
	button {cursor: pointer;}
</style>