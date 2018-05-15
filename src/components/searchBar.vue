<template>
  <!--代码部分begin-->
      <div class="jq22-search-form">
          <div id="search-bd" class="search-bd">
              <!-- <ul>
                  <li class="selected">找商品</li>
                  <li>找商家</li>
              </ul> -->
          </div>
          <div id="search-hd" class="search-hd">
              <div class="search-bg"></div>
              <input type="text" id="s1" class="search-input">
              <!-- <input type="text" id="s2" class="search-input"> -->
              <!-- <span class="s1 pholder">食品酒水半价抢疯</span> -->
              <!-- <span class="s2 pholder">搜商家名称</span> -->
              <button id="submit" class="btn-search" value="搜索">搜索</button>
          </div>
      </div>
</template>

<script>
// $(function(){
//            $('#search-bd li').click(function(){
//                var index = $(this).index();
//                $('#search-hd .pholder').eq(index).show().siblings('.pholder').hide(0);
//                $('#search-hd .search-input').eq(index).show().siblings('.search-input').hide(0);
//                $(this).addClass('selected').siblings().removeClass('selected');
//                $('#search-hd .search-input').val('');
//            });
//        })
</script>

<style>
*{margin:0;padding:0;list-style:none;}
.jq22-search-form{width:575px;margin:2px auto;float: left;overflow: hidden;}
.jq22-search-form .search-bd{height: 2px;}
.jq22-search-form .search-bd li{font-size:12px;width:60px;height: 25px;line-height: 25px;text-align:center;float: left;cursor: pointer;background-color: #eee;color: #666;}
.jq22-search-form .search-bd li.selected{color: #fff;font-weight: 700;background-color: #B61D1D;}
.jq22-search-form .search-hd{height:34px;background-color: #B61D1D;padding: 3px;position: relative;}
.jq22-search-form .search-hd .search-input{width: 550px;height: 22px;line-height: 22px;padding: 6px 0;background: none;border: 0;outline: none;position: relative;left: 3px;top: 0;z-index: 5;#margin-left:-10px;}
.jq22-search-form .search-hd .btn-search{width: 70px;height: 34px;line-height:34px;position: absolute;right: 3px;top: 3px;border: 0;z-index: 6;cursor: pointer;font-size: 12px;color: #fff;font-weight: 700;background: none;outline: none;}
/* .jq22-search-form .search-hd .pholder{display: inline-block;padding: 2px 0;font-size: 12px;color: #999;position: absolute;left: 13px;top: 11px;z-index: 4;background: url(../images/searchBar/zoom.jpg) no-repeat 0 0;padding-left:25px;#top:11px;} */
/* .jq22-search-form .search-hd .s2,.jq22-search-form .search-hd #s2{display: none;} */
.jq22-search-form .search-bg{width: 495px;height: 34px;background-color: #fff;position: absolute;left: 3px;top: 3px;z-index: 1;}
</style>
