<template>
  <div id="home">
    <ly-tab
      v-model="selectedId"
      class="fix"
      :items="items"
      @change="handleChange"
      :options="options"
     />
    <router-view></router-view>
  </div>
</template>

<script>


    export default {
        name: "Home",
        data(){
            return {
                selectedId: 0,
                items: [
                    {label: '热门'},
                    {label: '服饰'},
                    {label: '鞋包'},
                    {label: '母婴'},
                    {label: '百货'},
                    {label: '食品'},
                    {label: '内衣'},
                    {label: '男装'},
                    {label: '电器'}
                ],
                options:{
                    activeColor: '#e9232c',  //设置选中的颜色
                },
                // 二级路由的路径
                subRouteUrl: [
                    '/home/hot',
                    '/home/dress',
                    '/home/box',
                    '/home/mbaby',
                    '/home/general',
                    '/home/food',
                    '/home/shirt',
                    '/home/man',
                    '/home/ele'
                ]
            }
        },
        methods: {
            handleChange(item, index){
                // console.log(item, index);
                this.$router.replace(this.subRouteUrl[index]);
            }
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  #home
    width 100%
    height 100%
    background #f5f5f5
    /*background-color red*/
    display flex

    .fix
      position fixed
      left 0
      top 0
      width 100%
      z-index 998
</style>
