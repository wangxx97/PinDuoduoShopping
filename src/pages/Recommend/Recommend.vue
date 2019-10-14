<template>
<div id="recommend">
  推荐
</div>
</template>

<script>
    import {mapState} from 'vuex';
    // import ShopList from './../../components/ShopList/ShopList';
    // import SelectLogin from './../../pages/Login/SelectLogin';
    // import Scroll from './../../components/mescroll/Scroll';
    export default {
        name: "Recommend",
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .scroller
    padding-bottom 5rem
    .recommend
      display flex
      flex-direction row
      flex-wrap wrap
      background-color: #f5f5f5;
</style>
