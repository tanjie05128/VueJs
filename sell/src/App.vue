<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <!--<a href="/goods">商品</a>-->
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!--路由外链-->
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header';
//  import {urlParse} from 'common/js/util';

  const ERR_OK = 0;

  export default {
    data() {
      return {
        seller: {
          id: (() => {
//            下面这个id是在localStorage里面存储用户关注商家的，若放开则需要在地址栏填入？id=12345这类url
//            let queryParam = urlParse();
//            return queryParam.id;
          })()
        }
      };
    },
    created() {
      this.$http.get('https://www.easy-mock.com/mock/59914d11a1d30433d8610f39/elem/api/seller').then((response) => {
//      this.$http.get('/api/seller').then((response) => {
//      this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
        response = response.body;
        this.seller = response.seller;
        if (response.errno === ERR_OK) {
//          this.seller = Object.assign({}, this.seller, response.data);
          this.seller = response.data;
//          console.log(this.seller);
        }
      });
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin.styl"

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display:block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
