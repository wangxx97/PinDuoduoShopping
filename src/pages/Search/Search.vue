<template>
  <div class="search">搜索</div>
    <!--搜索导航-->
  </template>
<script>
  export default {
      name:'Search'
  }

</script>


<style scoped lang="stylus" ref="stylesheet/stylus">
  /*@import "../../common/stylus/mixins.styl"*/
  .search
    background green
    width 100%
    height 100%
    overflow hidden

    .shop
      display flex
      position absolute
      top 60px
      bottom 50px
      width 100%
      overflow hidden

      .menu-wrapper
        background-color #e0e0e0
        width 80px
        flex 0 0 80px

        .menu-item
          width 100%
          height 60px
          background-color: #fafafa
          display flex
          justify-content center
          align-items center
          font-weight lighter
          color #666666
          position relative

        .current
          color #e02e24

        .current::before
          content: ''
          background-color #e02e24
          width 4px
          height 30px
          position absolute
          left 0

      .shop-wrapper
        flex 1
        background-color #fff

        .shops-title
          display flex
          flex-direction row
          padding 0 10px
          height 44px
          align-items center
          justify-content space-between
          color #999

          a
            color #999
            text-decoration none
            font-weight lighter

        .shops-items
          display flex
          flex-wrap wrap

          li
            display flex
            flex-direction column
            width 33.3%
            height 90px
            justify-content center
            align-items center
            color #666
            font-weight lighter
            font-size 14px

            img
              width 60%
              height 60%
              margin-bottom 5px

        .phone-type
          width 100%
          display flex
          flex-direction row
          flex-wrap wrap
          border-bottom-1px(#ccc)

          li
            width 33.3%
            display flex
            justify-content center
            align-items center
            margin 5px 0

            img
              width 70%
</style>
