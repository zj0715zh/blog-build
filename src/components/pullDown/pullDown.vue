<template>
  <section class="pullDown">
    <div class="tagList">
      <a href="javascript:;">JavaScript</a>
      <a href="javascript:;">JavaScript</a>
      <a href="javascript:;">JavaScript</a>
      <a href="javascript:;">JavaScript</a>
    </div>
    <div class="upDown">
      <i class="icon iconfont icon-xiangshang1"></i>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'pullDown',
    mounted(){
      var icon = document.querySelector('.upDown');
       var tagList = document.querySelector('.pullDown .tagList');
      icon.addEventListener('click',function(e){
        var upDown = document.querySelectorAll('.icon-xiangshang1');
        if(upDown.length>0){
          tagList.setAttribute('class','tagList open')
          this.innerHTML = '<i class="icon iconfont icon-xiangshang"></i>';
        }else{
          tagList.setAttribute('class','tagList')
          this.innerHTML = '<i class="icon iconfont icon-xiangshang1"></i>';
        }
      });
    }
  }
</script>

<style scoped lang="css" src="./pullDown.css">
</style>
