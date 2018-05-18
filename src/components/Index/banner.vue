<template lang="html">
    <div class="banner">
        <div class="block">
          <el-carousel height="350px">
            <el-carousel-item v-for="item in imgList" :key="item">
                <img :src="item" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgList: [
                '/static/images/index/banner1.jpg',
                '/static/images/index/banner3.jpg',
            ],
        }
    },
    methods: {

    },
}
</script>

<style lang="css" scoped>
    .banner {
        margin-top: 20px;
    }

    .banner img {
        width: 100%;
    }
</style>
