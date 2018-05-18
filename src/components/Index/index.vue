<template>
	<div id="index">
		<banner></banner>
		<!-- 文章列表 -->
		<articleList></articleList>
	</div>
</template>

<script>
import banner from '@/components/Index/banner'
import articleList from '@/components/Index/articleList'
export default {
	data () {
		return {

		}
	},
	methods: {

	},
	components: {
		banner,
		articleList,
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#index {


	}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
