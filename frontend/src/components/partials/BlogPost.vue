<template>
	<div class="post">
		<div class="image">
			<img src="../../assets/logo.png">
		</div>
		<div class="description">
			<h4>{{post.title}}</h4>
			<p>{{ post.description }}</p>
			<button class="btn" @click="viewPost(post.id)">More...</button>
			<button class="btn" @click="deletePost(post.id)">Delete</button>
		</div>
	</div>
</template>

<script>
import router from "../../router";
import axios from "axios";
import config from "../../config/settings";

export default {
	props: ["post"],
	name: "BlogPost",
	methods: {
		viewPost(id) {
			router.push(`blog/post/${id}`);
		},
		deletePost(id) {
			axios
				.get(`${config.url}/posts/delete/${id}`)
				.then(result => {
					if (result.data.error == false) {
						this.$emit("isDeleted");
					} else {
						this.$emit("hasError", result.data.message);
					}
				})
				.catch(err => {
					this.$emit("hasError", err.message);
				});
		}
	}
};
</script>

<style>
.post {
	display: flex;
	margin: 10px 0;
	padding-bottom: 10px;
	box-shadow: 2px 1px 10px 1px rgba(201, 199, 235, 0.075);
	transition: 5ms ease-in-out;
	padding: 10px;
}
.post:hover {
	box-shadow: 2px 1px 10px 1px rgba(201, 119, 235, 0.233);
	transition: 5ms ease-in-out;
}
.image {
	flex: 1;
}
.image img {
	width: 100px;
	padding-right: 5px;
}
.description {
	flex: 11;
}
.description h4 {
	margin: 5px 0;
	padding: 5px 0;
	text-transform: uppercase;
	color: #0d3523;
	border-bottom: 1px solid #7dcca9;
	cursor: pointer;
}
</style>
