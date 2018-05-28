<template>
	<el-container>
  		<el-header>

        <!-- <el-row :gutter="0">
          <el-col :span="3" pull="0"> -->
          <!-- <div class="logo">
                <img class="logoImage" src="../images/logo.png">
          </div> -->
          <!-- </el-col> -->

          <!-- <el-col :span="8" pull="0"> -->
          <div class="nav1">
            <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">图书推荐</el-menu-item>
            <el-menu-item index="2">我的收藏</el-menu-item>
            <el-menu-item index="3">标签分类</el-menu-item>
            <el-menu-item index="4">个人主页</el-menu-item>
            </el-menu>
          </div>
          <!-- </el-col> -->

          <!-- <el-col :span="2" push="9"> -->
           <div class="nav2"> 
            <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">登录</el-menu-item>
            </el-menu>
           </div>
          <!-- </el-col> -->
        <!-- </el-row> -->
      </el-header>

  		<el-main>
        <div>
        <div class="article">
          <ul>
            <li>
                <a class="bookCover" href="https://book.douban.com/subject/27621504/">
                <img src="https://img3.doubanio.com/view/subject/m/public/s29751562.jpg">
                </a>
                <div class="bookIntro">
                    <h2>
                        <a calss="link" href="https://book.douban.com/subject/27621504/">在美国钓鳟鱼</a>
                    </h2>
                    <p class="bookRating">
                        <!-- 评分 -->
                        <el-rate
                          v-model="value5"
                          disabled  
                          show-score
                          text-color="#ff9900"
                          score-template="{value}">
                        </el-rate>
                    </p>
                    <p class="color-gray">
                        [美] 理查德·布劳提根 / 广西师范大学出版社 / 2018-5
                    </p>
                    <p class="bookDetail">
                        后垮掉派诗人理查德·布劳提根的小说代表作，一趟在时空之中、在虚构与现实之间穿梭跳跃的钓鳟鱼之旅，曾在美国畅销逾200万册。        
                    </p>
                </div>
            </li>

            <li>
                <a class="bookCover" href="https://book.douban.com/subject/27621504/">
                <img src="https://img3.doubanio.com/view/subject/m/public/s29751562.jpg">
                </a>
                <div class="bookIntro">
                    <h2>
                        <a calss="link" href="https://book.douban.com/subject/27621504/">在美国钓鳟鱼</a>
                    </h2>
                    <p class="bookRating">
                        <!-- 评分 -->
                        <el-rate
                          v-model="value5"
                          disabled  
                          show-score
                          text-color="#ff9900"
                          score-template="{value}">
                        </el-rate>
                    </p>
                    <p class="color-gray">
                        [美] 理查德·布劳提根 / 广西师范大学出版社 / 2018-5
                    </p>
                    <p class="bookDetail">
                        后垮掉派诗人理查德·布劳提根的小说代表作，一趟在时空之中、在虚构与现实之间穿梭跳跃的钓鳟鱼之旅，曾在美国畅销逾200万册。        
                    </p>
                </div>
            </li>
          </ul>
        </div>

        <div class="aside">
          <ul>
            <li>
                <a class="bookCover" href="https://book.douban.com/subject/27621504/">
                <img src="https://img3.doubanio.com/view/subject/m/public/s29751562.jpg">
                </a>
                <div class="bookIntro">
                    <h2>
                        <a calss="link" href="https://book.douban.com/subject/27621504/">在美国钓鳟鱼</a>
                    </h2>
                    <p class="bookRating">
                        <!-- 评分 -->
                        <el-rate
                          v-model="value5"
                          disabled  
                          show-score
                          text-color="#ff9900"
                          score-template="{value}">
                        </el-rate>
                    </p>
                    <p class="color-gray">
                        [美] 理查德·布劳提根 / 广西师范大学出版社 / 2018-5
                    </p>
                    <p class="bookDetail">
                        后垮掉派诗人理查德·布劳提根的小说代表作，一趟在时空之中、在虚构与现实之间穿梭跳跃的钓鳟鱼之旅，曾在美国畅销逾200万册。        
                    </p>
                </div>
            </li>

            <li>
                <a class="bookCover" href="https://book.douban.com/subject/27621504/">
                <img src="https://img3.doubanio.com/view/subject/m/public/s29751562.jpg">
                </a>
                <div class="bookIntro">
                    <h2>
                        <a calss="link" href="https://book.douban.com/subject/27621504/">在美国钓鳟鱼</a>
                    </h2>
                    <p class="bookRating">
                        <!-- 评分 -->
                        <el-rate
                          v-model="value5"
                          disabled  
                          show-score
                          text-color="#ff9900"
                          score-template="{value}">
                        </el-rate>
                    </p>
                    <p class="color-gray">
                        [美] 理查德·布劳提根 / 广西师范大学出版社 / 2018-5
                    </p>
                    <p class="bookDetail">
                        后垮掉派诗人理查德·布劳提根的小说代表作，一趟在时空之中、在虚构与现实之间穿梭跳跃的钓鳟鱼之旅，曾在美国畅销逾200万册。        
                    </p>
                </div>
            </li>
          </ul>
        </div>
        </div>
        <div class="page">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>

      </el-main>

	</el-container>
</template>

<script>
  // import header from '../components/header.vue'

      export default {
        name: 'home2',
        data () {
            return{
                data:[],
                value5: 3.7,
                activeIndex: '1',
                activeIndex2: '1'
            }
        },
        mounted: function () {
            this.$axios.get('https://www.easy-mock.com/mock/5b026b6a55348c1c9545d9ec/wusu/getBookList').then(res =>{
                this.data = res.data;
                console.log(res)
            })
        }
        ,
          methods:  {
              handleSelect(key, keyPath) {
              console.log(key, keyPath);
            }
          }
        // ,
        // components:{
        //   header
        // }
    }
</script>

<style>
  /* .logoImage{
    position: absolute;
    top: 0px;
    left: 0px;
 width:auto;
 height:auto;
 max-width:100%;
 max-height:100%;
  }

  .logo{
    width: 140px;
    height: 60px;
    float: left;
    overflow: hidden;
  } */

  .nav1{
    width: 400px;
    height: 60px;
    float: left;
    margin: 0 0 0 135px;
  }

  .nav2{
    width: 100px;
    height: 60px;
    float: left;
    margin: 0 0 0 572px;
  }

  li{
    height: 145px;
    overflow: hidden;
    margin: 0 0 30px 0;
  }

  .article{
    width: 465px;
    float: left;
    margin: 0 0 0 0px;
  }

  .aside{
    width: 465px;
    float: left;
    margin: 0 0 0 70px;
  }

  .page{

    width:1000px;
    float: left;
    text-align: center;
    margin: 0 auto;
  }

  h2{
    display: block;
    font: 15px Arial, Helvetica, sans-serif;
    color: #37a;
    /* font-weight: bold; */
    margin:0 0 0 0;
  }

  a{
    text-decoration: none;
  }

  a.bookCover{
    float: left;
    display: block;
    width: 100px;
  }

  .bookIntro{
    width: 340px;
    height: 132px;
    margin-left: 120px;
  }

  .bookRating{
    /* width: 240px; */
    height: 13px;
    
  }

  .color-gray{
    color: #666;
    font-size: 14px;
    margin:0 0 5px 0;
  }

  .bookDetail{
    width: 340px;
    height: 48px;
    font-size: 14px;
    margin:0 0 0 0;

  }

  img{
    width: 100px;
    border-width: 0;
    vertical-align: middle;
  }

  .el-container {
    margin:0 0 0 0; 
  }

  .el-header {
	  position:absolute;
	  top:0px;
	  bottom:0px;
    background-color: #545c64;
    
    color: #333;
    text-align: left;
    line-height: 115px;
    width:100%;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    height: 960px;
	  width:1040px;
	  margin:0px auto;
  }

  .el-row {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    height: 60px;
    overflow: hidden;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 145px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>