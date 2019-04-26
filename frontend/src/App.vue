<template>
	<div id="app">
		<Navbar/>
		<div class="container">
			<div class="page">
				<div class="sidebar">
					<SideBar/>
				</div>
				<div class="main">
					<router-view/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Navbar from "./components/partials/Navbar.vue";
import SideBar from "./components/partials/SideBar.vue";
export default {
	name: "App",
	components: { Navbar, SideBar }
};
</script>
<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.page {
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-column-gap: 10px;
	padding: 20px;
}
</style>
