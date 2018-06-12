<template>	
  <div class="profileMain">
  <!-- <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane label="用户资料"></el-tab-pane>
    <el-tab-pane label="修改密码"></el-tab-pane>
    <el-tab-pane label="浏览历史"></el-tab-pane>
    <el-tab-pane label="退出登录"></el-tab-pane>
  </el-tabs> -->
    <div class="userMian">
      <div class="profileTitle">
        <h1>我的地盘</h1>
      </div>
      <div class="user_profile">
        <div class="user_info">
          <div class="user_pic">
          <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4001482655,2780369060&fm=58" style="height:60px ; width:60px">
          </div>
          <div class="name_reg">
            <h1 class="profile_h1">小武酥
              <div class="reg_Time">
                2018-11-4
              </div>
            </h1>
          </div>
        </div>

        <!-- <div class="user_change">
          <ul class="profile_ul">
              <li class="profile_li">
                <el-button type="text" @click="fixPass">密码修改</el-button>
              </li>
              <li class="profile_li">
                <a>退出登录</a>
              </li>
          </ul>
        </div> -->
      </div>

      <div class="user_history">
        <div class="historyTitle">
            <h1>浏览历史</h1>
        </div>
        <div class="history_bookList">
          <ul>
            <li v-for="(historyList,index) in historyLists" class="pro_smallCover">
                <div class="pro_cover">
                  <a href="https://book.douban.com/subject/27616947/?icn=index-latestbook-subject" title="刀锋之先">
                  <img v-bind:src="historyList.book_cover" class="pro_midSize"  alt="刀锋之先">
                  </a>
                </div>
                <div class="pro_info">
                  <div class="pro_title">
                    <a class="pro_titleFont" href="https://book.douban.com/subject/27616947/?icn=index-latestbook-subject" title="刀锋之先">{{historyList.book_name}}</a>
                  </div>
                  <div class="pro_author">
                    {{historyList.book_author}}
                  </div>
                </div>
            </li>
            
          </ul>
        </div> 
      </div>
    </div>

    <div class="userTags">
      <div class="myTagTitle">
            <h1>我的标签</h1>
      </div>
      <div class="myTagTitle">
         <div class="myTagTitle2">
            <i class="el-icon-edit"></i>
          </div>
      </div>

      <div class="bookTag">
      <ul>
        <li class="li_tag" v-for="mytagList in mytagLists">
          <el-tag>{{mytagList.tag_name}}</el-tag>
        </li>

        <!-- <li class="li_tag" >
          <el-tag>小说</el-tag>
          <el-tag type="success">随笔</el-tag>
          <el-tag type="info">日本文学</el-tag>
        </li>
        <li class="li_tag" >
          <el-tag>诗歌</el-tag>
          <el-tag type="success">青春</el-tag>
          <el-tag type="info">奇幻</el-tag>
        </li>
        <li class="li_tag" >
          <el-tag>职场</el-tag>
          <el-tag type="success">旅行</el-tag>
          <el-tag type="info">传记</el-tag>
        </li> -->

      </ul>
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
    export default {
        name: 'profile',
        data () {
          return {
            tabPosition: 'right',
            historyLists:[],
            mytagLists:[]
          };
        },
        methods:  {
          // fixPass() {
          //   this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
          //     dangerouslyUseHTMLString: true
          //   });
      
          // }

        },
        mounted: function () {
          // 获得历史记录
            this.$axios.get('http://localhost:8090/userHistory/findUserHistory.do').then(res =>{
                this.historyLists = res.data.historyList;
            }),

            this.$axios.get('http://localhost:8090/userTag/getUserTag.do').then(res =>{
                this.mytagLists = res.data.userTagList;
            })
        },
        components:{

        }
    }
</script>
 
<style>
  .profileMain{
    width: 1030px;
    height: 900px;
    margin: 0 auto;
    /* border:1px #F00 solid;
    background-color: #eee; */
  }

  .profileTitle{
      width: 600px;
      height: 50px;
      float: left;
      margin: 0 0 15px 0;
  }

  .userMian{
    width: 660px;
    height: 700px;
    float: left;
    /* border:1px #F00 solid;
    background-color: #eee; */
  }

  .user_profile{
    width: 660px;
    height: 60px;
    float: left;
    /* border:1px #F00 solid;
    background-color: #eee; */
  }


  .user_pic{
    width: 60px;
    height: 60px;
    float: left;
    /* margin: 30px 0 0 30px; */
  }

  .user_info{
    width: 600px;
    height: 60px;
  }
  
  .name_reg{
    position: relative;
    left: 10px;
    width: 400px;
    height: 60px;
    float: left;
  }

  .profile_h1{
    width: 400px;
    height: 60px;
    float: left;
    font-size: 26px;
    font-weight: bold;
    display: block;
    margin: 0;
  }

  .reg_Time{
    width: 100%;
    margin: 7px 0 15px 0;
    font-size: 14px;
  }

  .user_change{
    width: 400px;
    height: 30px;
  }

  .profile_li{
    width: 70px;
    height: 30px;
  }

  .profile_ul{
    width: 200px;
    height: 30px;
    margin: 5px 0 0 0;
  }

  .historyTitle{
    width: 600px;
    height: 50px;
    float: left;
  }
  .user_history{
    width: 660px;
    height: 600px;
    position: relative;
    top: 0px;
    float: left;
    /* border:1px #F00 solid;
    background-color: #eee; */
  }
  
  .history_bookList{
    width: 660px;
    height: 500px;
    float: left;
  }
  .pro_smallCover{
    width: 115px;
    height: 219px;
    text-overflow: ellipsis;
    margin: 0px 28px 16px 0px;
  }

  img.pro_midSize{
    width: 115px;
    height: 172px;
    border-width: 0;
    vertical-align: middle;
  }
  .pro_info{
    width: 115px;
    height: 34px;
    text-align: center;
  }

  a.pro_titleFont{
    width: 103px;
    font-size: 13px;
    text-decoration: none;
  }

  .pro_title{
    width: 103px;
    height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap; 
    overflow: hidden;
  }

  .pro_cover{
    margin: 2px 0;
  }

  .pro_author{
    width: 103px;
    font-size: 13px;
    margin: 2px 0;
    height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap; 
    overflow: hidden;
  }
  
  .myTagTitle{
    width: 100px;
    height: 50px;
    /* text-align: center; */
    float: left;
    margin: 40px 0 15px 28px;
  }
  .myTagTitle2{
    width: 30px;
    height: 30px;
    /* text-align: center; */
    float: left;
    margin: 25px 0 15px 0px;
  }

  .userTags{
    width: 300px;
    height: 700px;
    float: right;
    /* border:1px #F00 solid;
    background-color: #eee; */
  }

  .bookTag{
    width: 255px;
    float: left;
    margin: 0px 0px 0px 22px
  }

  .li_tag{
    height: 40px;
    margin: 3px 2px 5px 5px;
  }
  
</style>
