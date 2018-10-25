<template>
  <section>
    <top-nav active="miniProgram"></top-nav>
    <pull-down></pull-down>
    <div class="tip">
      !个人小程序应用，由于时间关系，小程序只实现了部分接口，其他为静态内容，接口部署在我个人网站上。使用教程：可在小程序首页点击图片进入活动创建页面，页面使用了腾讯地图SDK和时间选择插件，方便快捷。
    </div>
    <img src="./img/mini.png" class="mini">
  </section>
</template>

<script>
  import TopNav from 'components/topNav/topNav'
  import PullDown from 'components/pullDown/pullDown'
  export default {
    name: 'miniProgram',
    computed: {
      logId () {
        if (this.$route && this.$route.params) {
          return this.$route.params.id
        }
        return 'Hanks10100'
      }
    },
    components:{
      TopNav,
      PullDown
    },
    mounted(){
      // setInterval(()=>{
      //   console.log(this.$route.params.id)
      // },1000)
    }
  }
</script>

<style scoped lang="css" src="./miniProgram.css">
</style>
