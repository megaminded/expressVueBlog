<template>
	<div>
		<div v-if="post.error.state">
			<h4>Error</h4>
			<p>{{post.error.message}}</p>
		</div>
		<div v-else>
			<div v-for="article in post.result" :key="article.id" id="post">
				<div id="image">
					<img src="../../assets/logo.png">
				</div>
				<div id="description">
					<h3>{{article.title}}</h3>
					<p>{{article.description}}</p>
					<hr>
				</div>
			</div>
			<h4>Comments (10)</h4>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import config from "../../config/settings";
import router from "../../router";
export default {
	name: "Reader",
	data() {
		return {
			post_id: this.$route.params.id,
			post: {
				error: {
					state: false,
					message: ""
				},
				result: {}
			}
		};
	},
	mounted() {
		if (this.post_id == "") {
			// router.push("/");
			console.log("Not found");
		} else {
			this.getPost(this.post_id);
		}
	},
	methods: {
		getPost(id) {
			axios
				.get(`${config.url}/posts/view/${id}`)
				.then(result => {
					if (result.data.error) {
						this.post.error.state = result.data.error;
						this.post.error.message = result.data.message;
					} else {
						this.post.error.state = result.data.error;
						this.post.result = result.data.post;
						console.log(this.post.result);
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
#post {
	display: flex;
	padding: 0 0 30px 0;
	margin-bottom: 20px;
	border-bottom: 1px solid #7dcca9;
}
#image img {
	width: 100%;
}
#image {
	flex: 1;
	margin: 0 10px;
}
#description {
	flex: 11;
}
</style>
