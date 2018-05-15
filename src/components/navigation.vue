<template>
  <!-- 代码 开始 -->


  <div class="wraper">


      <div class="nav">


          <ul>


              <li class="nav-item"><a href="#" target="_blank">网站首页</a></li>


              <li class="nav-item cur"><a href="#" target="_blank">我的收藏</a></li>


              <li class="nav-item"><a href="#" target="_blank">标签分类</a></li>


              <li class="nav-item"><a href="#" target="_blank">个人主页</a></li>

              <li class="nav-item"><a href="javascript:;" target="_blank" @click="Login()">登录</a></li>

          </ul>


          <!--移动的滑动-->


          <!-- <div class="move-bg"></div> -->


          <!--移动的滑动 end-->


      </div>


  </div>
</template>

<script type="text/javascript">

// $(function(){
//
//
// 	$(".nav").movebg({width:120/*滑块的大小*/,extra:40/*额外反弹的距离*/,speed:300/*滑块移动的速度*/,rebound_speed:400/*滑块反弹的速度*/});
//
//
// })
</script>

<style>

body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl, dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,th,td,iframe{margin:0; padding:0;}
body,button,input,select,textarea { font-family: tahoma,Arial,"Microsoft YaHei",SimSun; font-size: 12px; line-height: 1.5em;color:#222}
h1,h2,h3,h4,h5,h6{font-size:100%;font-weight: normal;}
fieldset,img{border:0;}
img{ vertical-align:top}
address,caption,cite,dfn,em,th,var,optgroup{font-style:normal;font-weight:normal;}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video{display:block; margin:0; padding:0;}/* HTML5 */
code,kbd,pre,samp{font-family:courier new,courier,monospace}
ol,ul,li{list-style:none;}
a{text-decoration:none; color:#222;}
a:hover{color:#052299;}
a:active{color:#052299;}
sup{vertical-align:text-top;}
sub{vertical-align:text-bottom;}
input,select,button{ vertical-align: baseline; *vertical-align:middle;font-family: tahoma, \5b8b\4f53, arial; font-size: 100%; border:none; background:none; }
input[type=checkbox],input[type=radio]{vertical-align:middle; margin:0 5px;}
input[type="text"],input[type="password"],textarea{outline-style:none;-webkit-appearance:none;}textarea{resize:none;}
textarea{overflow:auto; font:100% tahoma,\5b8b\4f53,arial;}
table{border-collapse:collapse; border-spacing:0;}

/*= 清除浮动=*/
.clear{clear: both; height:0px; line-height:0px; font-size:0px;}
.clearfix:after { content: "."; display: block; height: 0;  clear: both; visibility: hidden;}
/* Hides from IE-mac \*/
* html .clearfix {height: 1%;}
/* End hide from IE-mac */
*+html .clearfix {min-height: 1%;}
*html{zoom:expression(function(ele){ele.style.zoom = "1";document.execCommand("BackgroundImageCache",false,true)}
(this))}

/* 左右浮动 */
.fl{ float:left;}
.fr{ float:right}

/* 正文 */
.wraper{ width:1000px; padding-top:0px; margin:0 auto}
.nav{ position:relative; width:100%; height:40px; background:#F7F6EF; overflow:hidden}
.nav-item{ position:relative; float:left; width:120px; height:40px; line-height:40px; text-align:center; font-size:14px; z-index:1}
.nav-item a{ display:block; height:40px; color:##664D3C; }
.nav-item a:hover{ color:##664D3C}
.move-bg{ display:none;position:absolute;left:0;top:0; width:120px; height:40px; background:#4D0B33; z-index:0}

</style>
