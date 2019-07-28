<template>
  <div @click="clickHandle">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      :safe-area-inset-top="false"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <div slot="title" v-if="true">
        chenzehui
      </div>
    </van-nav-bar>
    <a href="/views/counter/main" class="counter">去往Vuex示例页面</a>
    <van-button type="primary">按钮</van-button>
    <card>
      <div slot="header">123</div>
      <div>陈泽辉</div>
    </card>
  </div>
</template>

<script>
  import Card from '@/components/Card'

  export default {
    components: {
      Card
    },
    data() {
      return {
        motto: 'Hello miniprograme',
        userInfo: {
          nickName: 'mpvue',
          avatarUrl: 'http://mpvue.com/assets/logo.png'
        }
      }
    },
    methods: {
      bindViewTap() {
        const url = '../logs/main'
        if (mpvuePlatform === 'wx') {
          mpvue.switchTab({ url })
        } else {
          mpvue.navigateTo({ url })
        }
      },
      clickHandle(ev) {
        console.log('clickHandle:', ev)
      },
      onClickLeft() {
      },
      onClickRight() {
      }
    },
    created() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
