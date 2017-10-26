<template>
  <section class="topNav">
    <section class="head">
      <div class="head_main">
        <ul class="nav left">
          <li class="index">
            <a href="door"><i class="icon iconfont icon-cha"></i>小邹茶社</a>
          </li>
          <li :class="active=='weblog'?'weblog active':'weblog'">
            <a href="weblog">网络日志</a>
          </li>
          <li class="blog">
            <a href="javascript:;">博客</a>
          </li>
          <li :class="active=='vueUI'?'vueUI active':'vueUI'">
            <a href="javascript:;">vue组件库</a>
          </li>
          <li :class="active=='msg_board'?'msg_board active':'msg_board'">
            <a href="javascript:;">留言板</a>
          </li>
        </ul>
        <ul class="heroRank right">
          <a href="javascript:;">青史留名</a>
        </ul>
      </div>
    </section>
    <section class="minhead">
      <div class="head_main">
        <i class="icon iconfont icon-cha"></i>小邹茶社
        <i class="icon iconfont icon-sanheng right" @click="navShow=!navShow"></i>
      </div>
      <transition name="slide-fade">
        <ul v-if="navShow" class="subNav">
          <li><a href="/"><i class="icon iconfont icon-cha"></i>&nbsp;&nbsp;小邹茶社</a></li>
          <li><a href="">网络日志</a></li>
          <li><a href="">vue组件库</a></li>
          <li><a href="">留言</a></li>
          <li><a href="">青史留名</a></li>
        </ul>
      </transition>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'topNav',
    props:{
      active:''
    },
    data(){
      return {
        navShow:false
      }
    },
    computed: {
      logId () {
        if (this.$route && this.$route.params) {
          return this.$route.params.id
        }
        return 'Hanks10100'
      }
    },
    mounted(){
      // setInterval(()=>{
      //   console.log(this.$route.params.id)
      // },1000)
    }
  }
</script>

<style scoped lang="less" src="./topNav.less">
</style>
<style scoped lang="css" src="./topNav.css">
</style>
