<template>
  <div id="hot">
    <!--1. 轮播图-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" ><img src="../../imgs/nav/s1.png" alt="" width="100%"></div>
        <div class="swiper-slide" ><img src="../../imgs/nav/s2.png" alt="" width="100%"></div>
        <div class="swiper-slide" ><img src="../../imgs/nav/s3.png" alt="" width="100%"></div>
        <div class="swiper-slide" ><img src="../../imgs/nav/s4.png" alt="" width="100%"></div>
        <div class="swiper-slide" ><img src="../../imgs/nav/s5.png" alt="" width="100%"></div>
        <div class="swiper-slide" ><img src="../../imgs/nav/s6.png" alt="" width="100%"></div>
        <div class="swiper-slide" ><img src="../../imgs/nav/s7.png" alt="" width="100%"></div>
      </div>
      <!--分页-->
      <div class="swiper-pagination"></div>

    </div>
    <!--2. 中间导航-->
    <hot-nav/>
    <!--商品列表-->
    <hot-shop-list />
  </div>
</template>

<script>
    // 1. 引入swiper相关
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'

    import HotNav from "./HotNav"

    export default {
        name:"Hot",
        components:{
            HotNav
        },
        mounted() {
            //创建swiper的实例
            new Swiper('.swiper-container', {
                autoplay:true, //等同于以下设置
                loop:true,
                //如果需要分页器
                pagination:{
                    el:'.swiper-pagination',
                }
            })
        }
    }

</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "../../../../common/stylus/mixins.styl"
  #hot
    overflow-x hidden !important
    width 100%
    height 100%
    padding-top 46px
    background #F5F5F5
</style>
