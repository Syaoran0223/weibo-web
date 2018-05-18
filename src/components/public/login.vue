<template lang="html">
    <div class="">
        <el-dialog
          title="登录"
          :visible.sync="dialogVisible"
          width='400px'
          >
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
        <div class="login-tip" v-if='errorFlag'>
            {{ loginError }}
        </div>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="loginSubmit()">确 定</el-button>
          </div>
        </el-dialog>
    </div>
</div>
</template>

<script>
import { login } from '@/components/API/user'
export default {
    data() {
        return {
            loginParams: {
				username: '',
				password: '',
			},
            dialogVisible: false,
            errorFlag: false,
            loginError: '登录失败',
        }
    },
    methods: {
        open() {
            this.dialogVisible = true
        },
        loginSubmit() {
            let data = this.loginParams
            for (var d in data) {
                let temp = data[d].length
                if (temp == 0) {
                    this.log(`${d}长度为0`)
                    this.errorFlag = true
                    this.loginError = '请输入帐号密码'
                    return
                }
            }
            login(data).then((res) => {
                this.log('login res', res)
                if (res.code != 0) {
                    this.loginError = res.msg
                    this.errorFlag = true
                    return
                }
                this.dialogVisible = false
            })
        },
    },
    watch: {
        dialogVisible() {
            if (this.dialogVisible == false) {
                for (var d in this.loginParams) {
                    this.loginParams[d] = ''
                }
                this.errorFlag = false
                this.log('清空了', this.loginParams)
            }
        }
    }
}
</script>

<style lang="css" scoped>
    .dialog-footer {
        text-align: center;
    }
    .login-part {
        display: flex;
    }
    .login-part + .login-part {
        margin-top: 10px;
    }
    .title {
        flex: 0 0 60px;
        text-align: center;
    }
    .content {
        flex: 1;
    }
    .content input {
        width: 250px;
    }
    .login-tip {
        color: red;
    }
</style>
