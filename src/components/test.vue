<template lang="html">
    <div class="">
        <button type="button" name="button" @click='testClick()'> 测试</button>
    </div>
</template>

<script>
import { isLogin } from '@/components/common/user'
export default {
    data() {
        return {

        }
    },
    methods: {
        testClick() {
            let data = {
                username: 'feng',
                password: '123',
            }
            isLogin(data).then((res) => {
                this.log('test res', res)
            })
        },
    },
	watch: {
		$route() {
			this.log('watch route')
		}
	},
}
</script>

<style lang="css">
</style>
