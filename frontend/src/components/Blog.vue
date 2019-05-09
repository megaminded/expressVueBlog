<template>
	<div id="blog">
		<h1>Blog Posts</h1>
		<Post v-for="post in posts" :key="post.id" :post="post"/>
	</div>
</template>
<script>
import axios from "axios";
import config from "../config/settings";
import Post from "./partials/BlogPost";
export default {
	data() {
		return {
			name: "Blog",
			posts: [],
			error: {
				state: false,
				message: "No errors"
			}
		};
	},
	components: {
		Post
	},
	methods: {
		getPosts() {
			axios
				.get(`${config.url}/posts/get`)
				.then(posts => {
					if (posts.data.length < 1) {
						this.error.state = true;
						this.error.message = "No Posts";
					} else {
						this.posts = posts.data;
					}
				})
				.catch(err => {
					this.error.state = true;
					this.error.message = err;
				});
		}
	},
	created() {
		this.getPosts();
	}
};
</script>

<style>
* {
	box-sizing: border-box;
	margin: 0;
}
hr {
	margin: 3px;
}
#app {
	font-family: Arial, Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	display: flex;
	margin: 0 auto;
}
#app h1 {
	margin: 10px 0;
}
#app form {
	align-content: center;
	align-items: center;
}
#app #form {
	flex: 1;
	padding: 10px;
}
#app #blog {
	flex: 2;
	padding: 10px;
}
#app #blog #post {
	padding: 5px;
}
#app #blog #post h4 {
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	color: maroon;
	text-transform: capitalize;
}
</style>
