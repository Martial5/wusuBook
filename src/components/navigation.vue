<template>
  <!-- 代码 开始 -->


  <div class="wraper">


      <div class="nav">


          <ul>


              <li class="nav-item"><a href="#" target="_blank">网站首页</a></li>


              <li class="nav-item"><a href="#" target="_blank">我的收藏</a></li>


              <li class="nav-item"><a href="#" target="_blank">标签分类</a></li>


              <li class="nav-item"><a href="#" target="_blank">个人主页</a></li>

              <li class="nav-item"><a href="javascript:;" target="_blank" @click="Login()">登录</a></li>

          </ul>


      </div>


  </div>
</template>

<script type="text/javascript">

</script>

<style>


/* 正文 */
.wraper{ width:1000px; padding-top:0px; margin:0 auto}
.nav{ position:relative; width:100%; height:40px; background:#F7F6EF; overflow:hidden}
.nav-item{ position:relative; float:left; width:120px; height:40px; line-height:40px; text-align:center; font-size:14px; z-index:1}
.nav-item a{ display:block; height:40px; color:#664D3C; }
.nav-item a:hover{ color:#664D3C}


</style>
