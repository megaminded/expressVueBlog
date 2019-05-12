<template>
	<div class="navbar">
		<div class="logo">
			<img id="icon" src="../../assets/logo.png">
		</div>
		<ul class="navlist">
			<li></li>
			<li>
				<router-link to="/">Home</router-link>
			</li>
			<li>
				<router-link to>Blog</router-link>
			</li>
			<li>
				<router-link to>About</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
	background: #17222e;
	position: fixed;
	height: 100%;
	color: white;
	width: 200px;
	padding: 50px 0px;
}
.navbar .logo {
	display: flex;
	align-content: center;
	margin: 0 0 50px 0;
}
.navbar .logo img {
	width: 100px;
	height: 100px;
	margin: 50px 50px 0 50px;
}
.navbar ul {
	margin: 0px;
	padding: 0px;
}
.navlist li a {
	display: block;
	color: white;
	padding: 10px 0 10px 50px;
	text-decoration: none;
}
.navlist li a:hover {
	background: #41b883;
	color: #35495e;
}
.navlist li {
	list-style: none;
	display: block;
	margin: 20px 0;
	text-decoration: none;
}
@keyframes flip {
	0% {
		transform: scale(1.2, 1.2);
		transition: 0.5s ease-in-out;
	}
	10% {
		transform: scale(1, 1);
		transition: 0.5s ease-in-out;
	}
	20% {
		transform: scale(1.2, 1.2);
		transition: 0.5s ease-in-out;
	}
	30% {
		transform: scale(1, 1);
		transition: 0.5s ease-in-out;
	}
	40% {
		transform: scale(1.2, 1.2);
		transition: 0.5s ease-in-out;
	}
}
#icon {
	animation: flip 5s ease-in-out;
	animation-iteration-count: infinite;
}
</style>
