<template>
	<div class="post">
		<h4>{{post.title}}</h4>
		<p>{{post.description}}</p>
	</div>
</template>

<script>
export default {
	props: ["post"]
};
</script>

<style>
.post {
	margin: 10px 0;
	border-bottom: 0.5px solid gray;
	padding-bottom: 10px;
}
h4 {
	margin: 5px 0;
	text-transform: capitalize;
	color: brown;
}
</style>
