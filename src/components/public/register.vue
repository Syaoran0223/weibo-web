<template lang="html">
    <div class="register">
        <el-dialog
          title="注册"
          :visible.sync="dialogVisible"
          width="25%"
          >
          <div class="register-part">
  	  		<div class="title">
  	  			帐号
  	  		</div>
  			<div class="content">
  				<input type="text" name="" value="" v-model='registerParams.username'>
  			</div>
  	  	</div>
  		<div class="register-part">
  			<div class="title">
  				密码
  			</div>
  			<div class="content">
  				<input type="password" name="" value="" v-model='registerParams.password'>
  			</div>
  		</div>
        <div class="register-part">
  			<div class="title">
  				确认密码
  			</div>
  			<div class="content">
  				<input type="password" name="" value="" v-model='registerParams.password'>
  			</div>
  		</div>
        <div class="register-tip" v-if='registerFlag'>
            {{ registerError }}
        </div>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="registerSubmit()">确 定</el-button>
          </div>
        </el-dialog>
    </div>
</div>
</template>

<script>
import { register } from '@/components/API/user'
export default {
    data() {
        return {
            registerParams: {
				username: '',
				password: '',
			},
            dialogVisible: false,
            registerFlag: false,
            registerError: '注册失败',
        }
    },
    methods: {
        open() {
            this.dialogVisible = true
        },
        registerSubmit() {
            let data = this.registerParams
            for (var d in data) {
                let temp = data[d].length
                if (temp == 0) {
                    this.log(`${d}长度为0`)
                    this.registerFlag = true
                    this.registerError = '请输入帐号密码'
                    return
                }
            }
            register(data).then((res) => {
                if (res.code != 0) {
                    this.registerError = res.msg
                    this.registerFlag = true
                    return
                }
                this.dialogVisible = false
            })
        },
    },
    watch: {
        dialogVisible() {
            if (this.dialogVisible == false) {
                for (var d in this.registerParams) {
                    this.registerParams[d] = ''
                }
                this.log('清空了', this.registerParams)
            }
        }
    }
}
</script>

<style lang="css" scoped>
    .register {
        user-select: none;
    }
    .dialog-footer {
        text-align: center;
    }
    .register-part {
        display: flex;
    }
    .title {
        flex: 0 0 60px;
        text-align: center;
        text-align: right;
    }
    .content {
        flex: 1;

    }
    .content input {
        width: 250px;
        position: relative;
        left: 20px;
    }
    .register-tip {
        color: red;
    }

</style>
