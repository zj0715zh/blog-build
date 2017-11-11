<template>
  <div id="app">
    <!-- <video id="bgvid" autoplay="" loop="" muted="" poster="//static.zhuwenlong.com/image/index/cover-820e030cca.jpg">
      <source src="//static.zhuwenlong.com/video/bgvideo-0c73e2c57a.mp4" type="video/mp4">
      <source src="//static.zhuwenlong.com/video/bgvideo-513397179e.webm" type="video/webm">
      <source src="//static.zhuwenlong.com/video/bgvideo-5428b1617d.ogv" type="video/ogg">
    </video> -->
    <section class="head">
      <div class="head_main">
        <ul class="nav left">
          <li class="index">
            <a href="door"><i class="icon iconfont icon-cha"></i>小邹茶社</a>
          </li>
          <li class="weblog">
            <a href="weblog">网络日志</a>
          </li>
          <li class="blog">
            <a href="javascript:;">博客</a>
          </li>
          <li class="vueUI">
            <a href="javascript:;">vue组件库</a>
          </li>
          <li class="msg_board">
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
          <a href="javascript:;" class="weixin"><i class="icon iconfont icon-weixin" @click="showWechat"></i></a>
          <a href="javascript:;" class="qq"><i class="icon iconfont icon-qq" @click="showQQ"></i></a>
        </div>
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
            <p>itJoy，常用名邹杰。</p>
            <p>高级动物，人科，属马，公元1990年诞生于银河系-地球（中国-浙江-温州）。</p><p>性情爽朗，喜欢运动。特别爱好羽毛球、篮球、台球，擅长羽毛球，业余也会用农药打发下时间。</p>
          </section>
          <section class="dream">
           <div class="img">
              <!-- <img src="./images/idnetity.jpg"> -->
            </div>
            <p>itJoy，常用名邹杰。</p>
            <p>高级动物，人科，属马，公元1990年诞生于银河系-地球（中国-浙江-温州）。</p><p>性情爽朗，喜欢运动。特别爱好羽毛球、篮球、台球，擅长羽毛球，业余也会用农药打发下时间。</p>
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
                      <p><input id="username"></p>
                    </label>
                  </div>
                  <div class="index-content-boxhalf">
                    <label>
                      <p>联系方式：</p>
                      <p><input id="email"></p>
                    </label>
                  </div>
                </div>
                <div class="index-content-message">
                  <label>
                    <p>内容：</p>
                    <p><textarea id="message"></textarea></p>
                  </label>
                </div>
                <div class="index-content-btn">
                  <button type="submit" id="send" class="btn">Send</button>
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
        navShow: false
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
      showWechat() {
        //展示微信二维码
      },
      showQQ() {
        //显示QQ二维码
      }
    }
  }
</script>

