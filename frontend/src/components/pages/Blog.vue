<template>
	<div id="blog">
		<h1>Blog Posts</h1>
		<hr>
		<button class="btn" v-on:click="refresh">Refresh</button>
		<button class="btn" v-on:click="newPost">New</button>
		<span id="loader" v-if="loading.state">{{loading.info}}</span>
		<hr>
		<div v-if="error.state || loading.state">
			<p>{{error.message}}</p>
		</div>
		<div v-else>
			<BlogPost
				v-on:isDeleted="deletePost"
				v-on:hasError="flashError"
				v-for="post in posts"
				:key="post.id"
				:post="post"
			/>
		</div>
	</div>
</template>
<script>
import axios from "axios";
import router from "../../router";
import config from "../../config/settings";
import BlogPost from "./../partials/BlogPost";
export default {
	data() {
		return {
			name: "Blog",
			posts: [],
			loading: { state: false, info: "" },
			error: {
				state: false,
				message: "No errors"
			}
		};
	},
	components: {
		BlogPost
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
						this.error.state = false;
						this.error.message = "";
						this.posts = posts.data;
					}
				})
				.catch(err => {
					this.error.state = true;
					this.error.message = `There was an error while trying to fetch blog posts, ${err}`;
				});
		},
		newPost() {
			router.push("/post/new");
		},
		refresh() {
			this.loading = {
				state: true,
				info: "Please wait"
			};
			setTimeout(() => {
				this.getPosts();
				this.loading = {
					state: false,
					info: ""
				};
			}, 1000);
		},
		flashError(error) {
			this.error.state = true;
			this.error.message = error;
		},
		deletePost(id) {
			this.refresh();
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
	padding: 5px 30px;
}
#app #blog #post h4 {
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	color: maroon;
	text-transform: capitalize;
}
#loader {
	float: right;
	font-family: monospace;
	color: rgb(255, 0, 0);
}
</style>
