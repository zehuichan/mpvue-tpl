<template>
  <div class="card">
    <div class="card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="card__body">
      <slot>{{body}}</slot>
    </div>
    <div class="card__extra" v-if="$slots.extra || extra">
      <slot name="extra"></slot>
    </div>
    <div class="card__footer" v-if="$slots.footer || footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: {
      header: {},
      body: {},
      extra: {},
      footer: {}
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  @import '~@/assets/less/1px.less';

  .card {
    font-size: 12px;
    line-height: 20px;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    margin-bottom: 10px;

  }

  .card__header {
    padding: 11px 16px;
    .vux-1px-b();
    box-sizing: border-box;
  }

  .card__body {
    padding: 16px;
  }

  .card__extra,
  .card__footer {
    font-size: 12px;
    padding: 11px 16px;
    border-top: 1px solid #ebeef5;
  }
</style>
