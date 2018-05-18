<template lang="html">
	<div id="header">
		<el-container >
  			<el-header>
				<!-- 注册 / 登录 / 用户-->
				<el-row class="hidden-sm-and-down">
					<div class="center" v-if="loginStatus == 0">
						<el-col :offset="1" :span="1">
							<div class="register path" @click="register()">
								注册
							</div>
						</el-col>
						<el-col :span="1">
							<div class="login path" @click="login()">
								登录
							</div>
						</el-col>
					</div>
					<el-col v-else :offset="1" :span="1" class="center">
						{{ userInfo.username }}
					</el-col>
					<!-- 右侧导航栏 -->
					<el-col :span="6":offset="13" class="red">
						<div class="flex">
							<div class="part"
								v-for="n in navList"
								@click="jump(n)"
							>
								{{n.name}}
							</div>
						</div>
					</el-col>
				</el-row>
				<!-- mobile -->
				<el-row class="hidden-sm-and-up">
					<el-col :span="8">|||</el-col>
					<el-col :span="8">111</el-col>
				</el-row>
				<div class="">
					<login ref="loginDialog"></login>
					<register ref="registerDialog"></register>
				</div>
			</el-header>
		</el-container>

	</div>
</template>

<script>
import login from '@/components/public/login'
import register from '@/components/public/register'
import { mapGetters } from 'vuex'
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
					path: '/article',
				},
				{
					name: '相册',
					path: '/albums',
				},
				{
					name: '游戏',
					path: '/game',
				},
			],
		}
	},
	methods: {
		jump(n) {
			this.$router.push({
				path: n.path
			})
		},
		login() {
			this.$refs.loginDialog.open()
		},
		register() {
			this.$refs.registerDialog.open()
		}
	},
	computed: {
		...mapGetters([
		  'loginStatus',
		  'userInfo',
		]),
		loginStatus() {
			return this.$store.state.loginStatus
		},
		userInfo() {
			return this.$store.state.userInfo
		},
	},
	components: {
		login,
		register,
	},
}
</script>

<style lang="scss" scoped>
	#header {
		width: 100%;
		height: 60px;
		background: #fff;
		border-bottom: 1px solid #ccc;
		box-shadow: 0 0 1px #ccc;
		line-height: 30px;
		position: relative;
		user-select: none;
	}
	.el-row {
		position: relative;
		top: 50%;
		transform: translateY(-50%);

		.el-col {
			cursor: pointer;
		}

	}
	.flex {
		display:flex;
		justify-content: flex-start;
		text-align: center;
		.part {
			flex: 1;
		}
		.part:hover {
			color: #ccc;
		}
	}
	.path:hover {
		color: #ccc;
	}
	.center {
		text-align: center;
	}


</style>
