<template>
	<div>
		<h3>Add Posts</h3>
		<p>{{post_id}}</p>
		<small v-if="post.error.state">{{post.error.message}}</small>
		<hr>
		<form @submit.prevent="submit">
			<label>Post title</label>
			<input type="text" v-model="post.title">
			<label>Post description</label>
			<textarea rows="20" v-model="post.description"></textarea>
			<button type="submit">POST</button>
		</form>
	</div>
</template>

<script>
import axios from "axios";
import config from "../../config/settings";
import router from "../../router";
export default {
	name: "NewPost",
	props: ["id"],
	data() {
		return {
			post_id: this.$route.params.id,
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
	mounted() {},
	methods: {
		submit() {
			axios
				.post(`${config.url}/posts/add`, this.post)
				.then(result => {
					if (result.data.error === true) {
						this.post.error.state = result.data.error;
						this.post.error.message = result.data.message;
					} else {
						router.push(`/blog/post/${result.data.message.insertId}`);
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
textarea {
	width: 100%;
}
button {
	padding: 5px;
	background-color: black;
	color: aliceblue;
	cursor: pointer;
	border: none;
}
</style>
