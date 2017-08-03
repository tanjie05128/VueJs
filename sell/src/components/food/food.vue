<template>
  <div>
    <transition name="move">
      <div class="food" v-show="showFlag">
        <div class="food-content">
          <div class="image-header">
            <img :src="food.image" alt="">
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      food: {
        type: Object
      }
    },
    data() {
      return {
        showFlag: false
      };
    },
    methods: {
      show() {
        this.showFlag = true;
      }
    }
  };
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .food
    position: fixed
    left: 0
    top: 0
    bottom: 48px
    z-index: 30
    width: 100%
    height: 100%
    background: #fff
    transform: translate3d(0, 0, 0)
    transition: all 0.2s linear
    &.move-enter, &.move-leave
      transform: translate3d(100%, 0, 0)
</style>
