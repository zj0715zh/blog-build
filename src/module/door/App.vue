<template>
  <div id="app">
    <section class="head">
      <div class="head_main">
        <ul class="nav left">
          <li class="index">
            <a href="/door"><i class="icon iconfont icon-cha"></i>小邹茶社</a>
          </li>
          <li class="vueUI">
            <a href="http://nvui.itzoujie.com">vue组件库</a>
          </li>
          <li class="blog">
            <a href="https://blog.csdn.net/itkingone">博客</a>
          </li>
          <li class="miniProgram">
            <a href="/weblog#/miniprogram">小程序</a>
          </li>
          <li class="weblog">
            <a href="/weblog">网络日志</a>
          </li>
          <li class="msg_board">
            <a href="javascript:;">留言板(待开发)</a>
          </li>
        </ul>
        <ul class="heroRank right">
          <a href="javascript:;">青史留名(找大牛中)</a>
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
          <li><a href="/weblog">网络日志</a></li>
          <li><a href="https://blog.csdn.net/itkingone">博客</a></li>
          <li><a href="http://47.89.249.180:8088/#/">vue组件库</a></li>
          <li><a href="javascript:;">留言板(待开发)</a></li>
          <li><a href="javascript:;">青史留名(找大牛中)</a></li>
        </ul>
      </transition>
    </section>
    <section class="content">
      <section class="teaForYou">
        <div class="canvasText">
          <canvas id="DrawText"></canvas>
        </div>
        <div class="minTeaForYou">
          The Best Tea For You
        </div>
        <div class="contactLogo">
          <a href="https://github.com/zj0715zh/" class="github"><i class="icon iconfont icon-github"></i></a>
          <a href="http://blog.csdn.net/itKingOne" class="blog"><i class="icon iconfont icon-blog"></i></a>
          <a href="javascript:;" class="weixin"><i class="icon iconfont icon-weixin" @touchstart="showWXlogo=true" @touchend="showWXlogo=false"  @mouseenter="showWXlogo=true" @mouseleave="showWXlogo=false"></i></a>
          <a href="javascript:;" class="qq"><i class="icon iconfont icon-qq"></i></a>
        </div>
        <div class="showWX" v-show="showWXlogo"><img src="./images/QR.jpg" class="icon iconfont icon-qq"></img></div>
      </section>
      <section class="AboutMe">
        <div class="textTitle">About Me</div>
        <div class="inforDetail">
          <section class="information">
            <div class="img">
              <!-- <img src="./images/idnetity.jpg"> -->
            </div>
            <p>itJoy，常用名邹杰。</p>
            <p>高级动物，人科，属马，公元1990年诞生于银河系-地球（中国-浙江-温州）。</p><p>性情爽朗，喜欢运动。特别爱好羽毛球、篮球、台球，擅长羽毛球，业余也会用农药打发下时间。</p>
          </section>
          <section class="job">
            <div class="img">
              <!-- <img src="./images/idnetity.jpg"> -->
            </div>
            <p>喜欢折腾的前端开发</p>
            <p>2014年接触前端，在一家创业公司实习。2015年离开宁波，来到上海。2016年进入平安刷了1年多副本，2017年进入拍拍贷接着刷。</p>
            <p>已习得技能 HTML(5), CSS(3), JAVASCRIPT, NODE.JS, VUE, MONGODB, NGINX, LINUX。</p>
          </section>
          <section class="dream">
           <div class="img">
              <!-- <img src="./images/idnetity.jpg"> -->
            </div>
            <p>羽毛球的狂热爱好者</p>
            <p>本人特别喜欢羽毛球，因为喜欢所以高中、大学都加入了羽毛球校队。</p>
            <p>打羽毛球能让我感受到快乐，那种全身心的放松能让我工作时的疲惫感消失殆尽。平时也会去社会上藏家一些比赛，偶尔还能拿拿奖，很开心！</p>
          </section>
        </div>
        </section>
        <section class="myGoal">
          <p>Build a Badminton Stadium</p>
          <p>That's one of my life goal</p>
        </section>
        <section class="travelGoal">
          <h3>A Dream Of Traveling</h3>
          <h4>My footprint must be spread all over the world</h4>
          <div class="des">
            <p>要么读书、要么旅行，灵魂和身体，必须有一个在路上。</p>
            <p>人生至少要有两次冲动，一为奋不顾身的爱情，一为说走就走的旅行。</p>
            <p>我躺下来，以一张报纸当枕头。高高在我上方的，是会眨眼的星星，而当火车弯曲而行，这些星群便上上下下的画着弧线，望着它们，我睡着了。今天已经过去——我生命中所有天中的一天，明天又会是新的一天，而我依然年轻。</p>
            <p>如果你不出去走走，你就会以为这就是世界。</p>
            <p>对我个人而言，它让我找到了信仰。一个有信仰的人生，不管成不成功，至少不会迷茫。</p>
          </div>
        </section>
        <section class="contactMe">
          <h3>Contact me</h3>
          <h4>If you have any question, please feel free contact me.</h4>
          <div class="des">
            <form>
              <div class="index-content-box">
                <div class="index-content-boxblock">
                  <div class="index-content-boxhalf">
                    <label>
                      <p>昵称/姓名：</p>
                      <p><input id="username" v-model="username"></p>
                    </label>
                  </div>
                  <div class="index-content-boxhalf">
                    <label>
                      <p>联系方式：</p>
                      <p><input id="email" v-model="email"></p>
                    </label>
                  </div>
                </div>
                <div class="index-content-message">
                  <label>
                    <p>内容：</p>
                    <p><textarea id="message" v-model="message"></textarea></p>
                  </label>
                </div>
                <div class="index-content-btn">
                  <a id="send" class="btn" @click="sendMsg">Send</a>
                </div>
                <span id="tips" class="index-content-tips">Message Sended</span></div>
            </form>
          </div>
        </section>
    </section>
  </div>
</template>

<style lang="less" src="./door.less">
</style>
<style lang="css" src="./media.css">
</style>
<script>
  export default {
    name: 'app',
    data() {
      return {
        navShow: false,
        showWXlogo:false,
        showQQlogo:false,
        username: '',
        email: '',
        message: ''
      }
    },
    mounted() {
      var c = document.getElementById("DrawText");
      var ctx = c.getContext("2d");
      ctx.font = "30px Arial";
      var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
      gradient.addColorStop("0", "grey");
      gradient.addColorStop("0.5", "#fff");
      gradient.addColorStop("1.0", "grey");
      // Fill with gradient
      ctx.strokeStyle = gradient;
      ctx.strokeText("The Best Tea For You", 0, 90);
    },
    components: {
      
    },
    methods: {
      sendMsg(){
        let vm = this;
        vm.username = vm.username.replace(/(^\s+)|(\s+$)/g,"");
        vm.email = vm.email.replace(/(^\s+)|(\s+$)/g,"");
        vm.message = vm.message.replace(/(^\s+)|(\s+$)/g,"");
        if(vm.message==''){
          alert('请客官给点指点，小生感恩万分')
          return;
        }
        if(vm.username==''){
          alert('请客官留下大名，让小生我铭记在心')
          return;
        }
        vm.$ajax.post('/msg/submit',{username:vm.username,email:vm.email,message:vm.message})
        .then(response=>{
          var data = response.data;
          if(data.code==200){
            alert('提交成功');
          }else{
            alert('客官，不好意思。服务器吃饭去了')
          }
        })
        .catch(response=>{alert('客官，不好意思。服务器吃饭去了')})
      }
    }
  }
</script>

