<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span @click="select(2, $event)" class="block positive" :class="{'active':selectType === 2}">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
      <span @click="select(0, $event)" class="block positive" :class="{'active':selectType === 0}">{{desc.positive}}<span class="count">{{positives.length}}</span></span>
      <span @click="select(1, $event)" class="block negative" :class="{'active':selectType === 1}">{{desc.negative}}<span class="count">{{negatives.length}}</span></span>
    </div>
    <div class="switch" @click="toggleContent" :class="{'on': onlyContent}">
      <span class="icon-check_circle"></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const POSITIVE = 0;
  const NEGATIVE = 1;
  const ALL = 2;

 export default {
   props: {
     ratings: {
       type: Array,
       default() {
         return [];
       }
     },
     selectType: {
      type: Number,
      default: ALL
     },
     onlyContent: {
       type: Boolean,
       default: false
     },
     desc: {
       type: Object,
       default() {
         return {
           all: '全部',
           positive: '满意',
           negative: '不满意'
         };
       }
     }
   },
   computed: {
     positives() {
       return this.ratings.filter((rating) => {
         return rating.rateType === POSITIVE;
       });
     },
     negatives() {
       return this.ratings.filter((rating) => {
         return rating.rateType === NEGATIVE;
       });
     }
   },
   methods: {
//     select方法的作用是将点击的type类型通知到父组件，以便重新更新ratingselect组件
     select(type, event) {
       if (!event._constructed) {
         return;
       }
//       不可以在子组件内，随意改变父组件传过来的值，通过 $emit 将子组件需要改变的值，发送给父组件，然后父组件在通过 props 传给 子组件，然后 view 就会发生相应的改变
//       this.selectType = type;
       this.$emit('select', type);
//       this.$root.eventHub.$emit('ratingtype.select', event.target);
     },
     toggleContent(event) {
       if (!event._constructed) {
         return;
       }
//       this.onlyContent = !this.onlyContent;
       this.$emit('onlyContent');
     }
   }
 };
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .ratingselect
    .rating-type
      padding: 18px 0
      margin: 0 18px
      border-1px(rgba(7,17,27,0.1))
      font-size: 0
      .block
        display: inline-block
        padding: 8px 12px
        margin-right: 8px
        border-radius: 1px
        font-size: 12px
        color: rgb(77, 85, 93)
        &.active
          color: #fff
        .count
          margin-left: 2px
          line-height: 16px
          font-size: 8px
        &.positive
          background: rgba(0, 160, 220, 0.2)
          &.active
            background: rgb(0, 160, 220)
        &.negative
          background: rgba(77, 85, 93, 0.2)
          &.active
            background: rgb(77, 85, 93)


    .switch
      padding: 12px 18px
      line-height: 24px
      border-bottom: 1px solid rgb(147,153,159)
      color: rgb(147,153,159)
      font-size: 0
      &.on
        .icon-check_circle
          color: #00c850
      .icon-check_circle
        display: inline-block
        vertical-align: top
        margin-right: 4px
        font-size: 24px
      .text
        font-size: 12px
</style>
