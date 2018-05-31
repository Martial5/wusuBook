<template>
	<div class="favoriteContainer">
        <div class="favorite_title">
            <h1>我的收藏</h1>
        </div>
        
        <div>
        <div class="article">
          <ul>
            <li>
                <a class="bookCover" href="https://book.douban.com/subject/27621504/">
                <img src="https://img1.doubanio.com/view/subject/m/public/s29725069.jpg">
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
                <img src="https://img1.doubanio.com/view/subject/m/public/s29725069.jpg">
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
                <img src="https://img1.doubanio.com/view/subject/m/public/s29725069.jpg">
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
                <img src="https://img1.doubanio.com/view/subject/m/public/s29725069.jpg">
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
	</div>
</template>

<script>
    export default {
        data () {
            return{
                data:[],
                value5: 3.7,
            }
        },
        mounted: function () {
            this.$axios.get('https://www.easy-mock.com/mock/5b026b6a55348c1c9545d9ec/wusu/getBookList').then(res =>{
                this.data = res.data;
                console.log(res)
            })
        }
        // ,
        //   methods:  {
        //       handleSelect(key, keyPath) {
        //       console.log(key, keyPath);
        //     }
        //   }
        ,
        components:{

        }
    }
</script>

<style>
    .favoriteContainer{
      height: 890px;
	  width:1030px;
      margin: 0 auto;
    }
  .favorite_title{
      width: 900px;
      height: 50px;
      float: left;
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

</style>