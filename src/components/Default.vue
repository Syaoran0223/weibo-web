<template>
  <div id="app">
		<top></top>
    	<router-view id="view"></router-view>
  </div>
</template>

<script>
import top from '@/components/public/header.vue'
export default {
  name: 'App',
  components: {
	  top,
  }
}
</script>

<style>
	html, body {
		padding: 0;
		margin: 0;
	}
	#app {
	  /* text-align: center; */
	}
	#view {
		width: 1200px; 		
		margin: 0 auto;
	}
</style>
