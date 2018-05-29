<template>
	<div id="index">
		<banner></banner>
		<!-- 文章列表 -->
		<h1>
			<router-link :to="{ path: '/test', params: {} }">测试路由</router-link>
		</h1>
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
	},
	watch: {
       '$route' (to, from) {
		   console.log('监听路由')
         // 对路由变化作出响应...
       }
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
