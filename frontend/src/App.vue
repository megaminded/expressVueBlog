<template>
	<div id="app">
		<Sidebar/>
		<div class="page">
			<router-view/>
		</div>
	</div>
</template>

<script>
import Sidebar from "./components/partials/Sidebar";

export default {
	components: {
		Sidebar
	}
};
</script>
<style>
* {
	margin: 0;
	box-sizing: border-box;
	font-family: Arial, Helvetica, sans-serif;
}
#app {
	display: flex;
}
.page {
	flex: 2;
	margin: 30px;
	margin-left: 220px;
}
.btn {
	padding: 5px 10px;
	background-color: #35495e;
	color: #7dcca9;
	border: none;
	margin-top: 5px;
	cursor: pointer;
	text-transform: uppercase;
}
</style>
