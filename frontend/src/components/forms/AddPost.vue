<template>
	<div>
		<h3>Add Posts</h3>
		<p>{{msg}}</p>
		<small v-if="post.error.state">{{post.error.message}}</small>
		<hr>
		<form @submit.prevent="submit">
			<label>Post title</label>
			<input type="text" v-model="post.title">
			<label>Post description</label>
			<input type="text" v-model="post.description">
			<button type="submit">POST</button>
		</form>
	</div>
</template>

<script>
import axios from "axios";
import config from "../../config/settings";
export default {
	name: "AddPost",
	data() {
		return {
			msg: "Complete form to add new blog post",
			post: {
				error: {
					state: false,
					message: ""
				},
				title: "",
				description: ""
			}
		};
	},
	methods: {
		submit() {
			axios
				.post(`${config.url}/posts/add`, this.post)
				.then(result => {
					if (result.data.error === true) {
						this.post.error.state = result.data.error;
						this.post.error.message = result.data.message;
					} else {
						this.post.error.state = true;
						this.post.error.message = "Posts has been added";
					}
				})
				.catch(err => {
					console.log(err);
				});
		}
	}
};
</script>

<style scoped>
h3 {
	margin: 10px 0;
}
label {
	font-weight: 600;
	color: gray;
	float: left;
}
input[type="text"] {
	width: 100%;
	padding: 10px;
	margin: 5px 0;
}
button {
	padding: 5px;
	background-color: black;
	color: aliceblue;
	cursor: pointer;
	border: none;
}
</style>
