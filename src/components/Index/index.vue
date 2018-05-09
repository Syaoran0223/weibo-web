<template>
	<div id="index">
	  	<div class="login">
	  	<div class="login-part">
	  		<div class="title">
	  			帐号
	  		</div>
			<div class="content">
				<input type="text" name="" value="" v-model='loginParams.username'>
			</div>
	  	</div>
		<div class="login-part">
			<div class="title">
				密码
			</div>
			<div class="content">
				<input type="text" name="" value="" v-model='loginParams.password'>
			</div>
		</div>
	  	</div>
	  	<div class="">
	  		<button type="button" name="button" @click="login()">登录</button>
	  	</div>
	</div>
</template>

<script>
import { login } from '@/components/API/user'
export default {
	data () {
	return {
			loginParams: {
				username: '',
				password: '',
			},
		}
	},
	created() {

	},
	methods: {
		login() {
		  	let data = this.loginParams
		  	login(data).then((res) => {
		    	console.log('login res', res)
		  	})
		}
	},
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
