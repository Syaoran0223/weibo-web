<template lang="html">
    <div class="articleList">
        <el-row :gutter="30" >
      <el-col
        :span="6"
        :xs="24"
        v-for="(l, index) in list"
        :key="index"
      >
            <transition name="el-zoom-in-top">
                <el-card
                    :body-style="{ padding: '0px'}"
                    shadow="hover"
                    v-show="animaInit"
                >
                <div class="" @click="jumpToArticle(l, index)">
                    <div class="title" >
                        {{ l.title }}
                    </div>
                  <div class="banner">
                      <img :src="l.banner" alt="">
                  </div>
                  <div class="content">
                    {{ l.content }}
                  </div>
                </div>

                </el-card>
            </transition>
      </el-col>
    </el-row>


    </div>
</template>

<script>
export default {
    data() {
        return {
            animaInit:false,
            list: [
                {
                    banner: '',
                    title: '文章标题1',
                    content: '文章内容文章内容',
                },
                {
                    banner: '/static/images/index/banner3.jpg',
                    title: '文章标题2',
                    content: '文章内容文章内容',
                },
                {
                    banner: '/static/images/index/banner1.jpg',
                    title: '文章标题3',
                    content: '文章内容文章内容',
                },
                {
                    banner: '/static/images/index/banner7.jpg',
                    title: '文章标题4',
                    content: '文章内容文章内容',
                },
                {
                    banner: '/static/images/index/banner1.jpg',
                    title: '文章标题5',
                    content: '文章内容文章内容',
                },

            ]
        }
    },
     mounted() {
        this.animaInit = true
    },
    methods: {
        jumpToArticle(l, index) {
            this.log(`点击到了文章:${l.title}`)
        }
    },
}
</script>

<style lang="scss" scoped>
    .articleList {
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 10px;
    }
    .el-card {
        padding: 0px;
        height: 400px;
        margin-bottom: 30px;
        img {
            width: 100%;
        }
        .title {
            margin: 5px 0;
            font-size: 16px;
            padding-left: 10px;
        }
        .content {
            padding-left: 10px;
            font-size: 14px;
        }
    }
</style>
