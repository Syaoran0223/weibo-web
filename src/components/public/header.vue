<template lang="html">
	<div id="header">
		<div class="list">
			<div class="" v-for="n in navList">
				<router-link :to="{ path: n.path, params: {} }">{{n.name}}</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			navList: [
				{
					name: '首页',
					path: '/',
				},
				{
					name: '文章',
					path: '/work',
				},

			],
		}
	},
	methods: {

	},
}
</script>

<style lang="css" scoped>
	#header {
		width: 100%;
		height: 80px;
		background: #fff;
		border-bottom: 1px solid #ccc;
		box-shadow: 0 0 1px #ccc;
		line-height: 40px;
		position: relative;
	}
	.list a {
		text-decoration: none;
		color: #000;
		margin: 0 20px;
	}
	.list {
		position: absolute;
		top: 50%;
		right: 12vw;
		transform: translateY(-50%);
		display: flex;
	}

</style>
