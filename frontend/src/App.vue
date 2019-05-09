<template>
	<div id="app">
		<div class="page">
			<Blog/>
		</div>
		<div id="form">
			<img src="./assets/logo.png">
			<router-view/>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import Blog from "./components/Blog";

export default {
	components: {
		Blog
	}
};
</script>
<style>
#app {
	display: flex;
}
.page {
	flex: 3;
	margin: 40px 0;
}
.form {
	flex: 2;
}
</style>
