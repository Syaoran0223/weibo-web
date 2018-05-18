<template>
  <div id="app">
		<vheader></vheader>
        <router-view id="view" v-if="userAgent == 'pc'"></router-view>
        <router-view id="view" name='phone' v-if="userAgent == 'phone'"></router-view>
        <vfooter> </vfooter>
  </div>
</template>

<script>
import vheader from '@/components/public/Header.vue'
import vfooter from '@/components/public/Footer.vue'

import { isLogin } from '@/components/API/user'
export default {
  name: 'App',
  data() {
    return {
        userAgent: 'pc',
    }
  },
  created() {
    isLogin()
    this.init()
  },
  methods: {
    init() {
        //获取访问的user-agent
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        // document.writeln("您的浏览设备为：");
        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            this.$store.commit('userAgentSave','phone')
            this.log('userAgent', this.$store.state.userAgent)
            return "phone"
        } else {
            this.$store.commit('userAgentSave','pc')
            this.log('userAgent', this.$store.state.userAgent)

            return "pc"
        }
    }
  },
  components: {
	  vheader,
      vfooter,
  }
}
</script>

<style lang='scss'>
	html, body {
		padding: 0;
		margin: 0;
        background: #f8f8f8;
	}
	#app {
	  /* text-align: center; */
	}
	#view {
		width: 80%;
		margin: 0 auto;
	}
</style>
