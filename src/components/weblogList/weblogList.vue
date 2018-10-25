<template>
  <section class="webloglist">
    <top-nav active="weblog"></top-nav>
    <pull-down></pull-down>
    <ul class="loglist">
      <a href="#" class="logLink">
        <li class="item">
          <div class="title">JavaScript生成CSV，以及中文乱码问题</div>
          <div class="tags">
            <i class="icon iconfont icon-tag"></i>
            <a href="javascript:;">JavaScript</a>
            <a href="javascript:;">JavaScript</a>
          </div>
          <div class="text_content">
            由于工作的原因经常需要将表格导出成CSV格式，之前这类的工作都是交由后端处理的，这次由于是做一个单纯的前端工具，所以不想麻烦后台大神，尝试了一次通过JavaScript生成CSV。其实整个过程通按照Baidu/Google上搜索出来的方案就可以流畅的完成，但是实际使用的时候，遇到了一些小问题，比如说中文乱码等，虽然折腾了半个小时用很hack方法解决了，但是整 ...
          </div>
          <div class="info">
            <i class="icon iconfont icon-riqi"><span>2017-08-22</span></i>
            <i class="icon iconfont icon-aixin2 right"><span>22</span></i>
            <i class="icon iconfont icon-dianzan right"><span>23</span></i>
            <i class="icon iconfont icon-pinglun right"><span>24</span></i>
          </div>
        </li>
      </a>
      <a href="#" class="logLink">
        <li class="item">
          <div class="title">JavaScript生成CSV，以及中文乱码问题</div>
          <div class="tags">
            <i class="icon iconfont icon-tag"></i>
            <a href="javascript:;">JavaScript</a>
            <a href="javascript:;">JavaScript</a>
          </div>
          <div class="text_content">
            由于工作的原因经常需要将表格导出成CSV格式，之前这类的工作都是交由后端处理的，这次由于是做一个单纯的前端工具，所以不想麻烦后台大神，尝试了一次通过JavaScript生成CSV。其实整个过程通按照Baidu/Google上搜索出来的方案就可以流畅的完成，但是实际使用的时候，遇到了一些小问题，比如说中文乱码等，虽然折腾了半个小时用很hack方法解决了，但是整 ...
          </div>
          <div class="info">
            <i class="icon iconfont icon-riqi"><span>2017-08-22</span></i>
            <i class="icon iconfont icon-aixin2 right"><span>22</span></i>
            <i class="icon iconfont icon-dianzan right"><span>23</span></i>
            <i class="icon iconfont icon-pinglun right"><span>24</span></i>
          </div>
        </li>
      </a>
    </ul>
  </section>
</template>

<script>
  import TopNav from 'components/topNav/topNav'
  import PullDown from 'components/pullDown/pullDown'
  export default {
    name: 'weblogList',
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
      
    }
  }
</script>

<style scoped lang="less" src="./weblogList.less">
</style>
