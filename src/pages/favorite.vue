<template>
	<div class="favoriteContainer">
        <div class="favorite_title">
            <h1>我的收藏</h1>
        </div>
        
        <div>
        <div class="article">
          <ul>
            <!-- <li v-for="(favoriteList,index) in favoriteLists">
                <a class="bookCover" href="https://book.douban.com/subject/27621504/">
                <img src="https://img1.doubanio.com/view/subject/m/public/s29725069.jpg">
                </a>
                <div class="bookIntro">
                    <h2>
                        <a calss="link" href="https://book.douban.com/subject/27621504/">{{favoriteList.bookName}}</a>
                    </h2>
                    <p class="bookRating">
                        <el-rate
                          v-model="favoriteList.bookRating"
                          disabled  
                          show-score
                          text-color="#ff9900"
                          score-template="{value}">
                        </el-rate>
                    </p>
                    <p class="color-gray">
                        {{favoriteList.bookAuthor}} / {{favoriteList.bookPub}} / {{favoriteList.bookDate}}
                    </p>
                    <p class="bookDetail">
                        {{favoriteList.bookDetail}}        
                    </p>
                </div>
            </li> -->
            <li>
                <a class="bookCover" href="https://book.douban.com/subject/27621504/">
                <img src="https://img3.doubanio.com/view/subject/m/public/s1015872.jpg">
                </a>
                <div class="bookIntro">
                    <h2>
                        <a calss="link" href="https://book.douban.com/subject/27621504/">我们仨</a>
                    </h2>
                    <p class="bookRating">
                        <!-- 评分 -->
                        <el-rate
                          v-model="value5"
                          disabled  
                          show-score
                          text-color="#ff9900"
                          score-template="8.7">
                        </el-rate>
                    </p>
                    <p class="color-gray">
                        杨绛 / 生活·读书·新知三联书店 / 2003-7 
                    </p>
                    <p class="bookDetail">
                        《我们仨》是钱钟书夫人杨绛撰写的家庭生活回忆录。1998年，钱钟书逝世，而他和杨绛唯一的女儿钱瑗已于此前（1997年）先他们而去。在人生的伴侣离去四年后，杨...  </p>
                </div>
            </li>
            <li>
                <a class="bookCover" href="https://book.douban.com/subject/27621504/">
                <img src="https://img1.doubanio.com/view/subject/m/public/s3984108.jpg">
                </a>
                <div class="bookIntro">
                    <h2>
                        <a calss="link" href="https://book.douban.com/subject/27621504/">目送</a>
                    </h2>
                    <p class="bookRating">
                        <!-- 评分 -->
                        <el-rate
                          v-model="value5"
                          disabled  
                          show-score
                          text-color="#ff9900"
                          score-template="8.7">
                        </el-rate>
                    </p>
                    <p class="color-gray">
                        龙应台 / 生活·读书·新知三联书店 / 2009-10 
                    </p>
                    <p class="bookDetail">
                        目送共由七十四篇散文组成，是为一本极具亲情、感人至深的文集。由父亲的逝世、母亲的苍老、儿子的离开、朋友的牵挂、兄弟的携手共行，写出失败和脆弱、失落和放手，写... </p>
                </div>
            </li>
            <li>
                <a class="bookCover" href="https://book.douban.com/subject/27621504/">
                <img src="https://img3.doubanio.com/view/subject/m/public/s6828981.jpg">
                </a>
                <div class="bookIntro">
                    <h2>
                        <a calss="link" href="https://book.douban.com/subject/27621504/">这些人，那些事</a>
                    </h2>
                    <p class="bookRating">
                        <!-- 评分 -->
                        <el-rate
                          v-model="value5"
                          disabled  
                          show-score
                          text-color="#ff9900"
                          score-template="8.8">
                        </el-rate>
                    </p>
                    <p class="color-gray">
                        吴念真 / 译林出版社 / 2011-9
                    </p>
                    <p class="bookDetail">
                        吴念真累积多年、珍藏心底的体会与感动。 他写的每个故事，都蕴藏了我们无法预知的生命能量与心灵启发。 跟他一起回望人生种种，您将学会包容、豁达与感恩…… 本书...  </p>
                </div>
            </li>
          </ul>
        </div>

        <div class="aside">
          <ul>
            <li>
                <a class="bookCover" href="https://book.douban.com/subject/27621504/">
                <img src="https://img3.doubanio.com/view/subject/m/public/s2280094.jpg">
                </a>
                <div class="bookIntro">
                    <h2>
                        <a calss="link" href="https://book.douban.com/subject/27621504/">浮生六记</a>
                    </h2>
                    <p class="bookRating">
                        <!-- 评分 -->
                        <el-rate
                          v-model="value5"
                          disabled  
                          show-score
                          text-color="#ff9900"
                          score-template="8.9">
                        </el-rate>
                    </p>
                    <p class="color-gray">
                        （清）沈复 / 人民文学出版社 / 1999/1 
                    </p>
                    <p class="bookDetail">
                        这是一部自传体文学的作品，原书六卷，已逸其二，现仅存四卷（有所谓“足本”者，后二记系伪作。书中记叙了作者夫妇间平凡的家居生活，坎坷际遇，和各地浪游闻见。文辞... </p>
                </div>
            </li>

            <li>
                <a class="bookCover" href="https://book.douban.com/subject/27621504/">
                <img src="https://img3.doubanio.com/view/subject/m/public/s29041051.jpg">
                </a>
                <div class="bookIntro">
                    <h2>
                        <a calss="link" href="https://book.douban.com/subject/27621504/">撒哈拉的故事</a>
                    </h2>
                    <p class="bookRating">
                        <!-- 评分 -->
                        <el-rate
                          v-model="value5"
                          disabled  
                          show-score
                          text-color="#ff9900"
                          score-template="9.0">
                        </el-rate>
                    </p>
                    <p class="color-gray">
                        三毛 / 皇冠出版社 / 1976 
                    </p>
                    <p class="bookDetail">
                        三毛作品中最膾炙人口的《撒哈拉的故事》﹐ 由１２篇精采動人的散文結合而成﹐ 其中＜沙漠中的飯店＞﹐ 是三毛適應荒涼單調的沙漠生活後﹐ 重新拾筆的第一篇文字﹐...   </p>
                </div>
            </li>
            <li>
                <a class="bookCover" href="https://book.douban.com/subject/27621504/">
                <img src="https://img3.doubanio.com/view/subject/m/public/s29446323.jpg">
                </a>
                <div class="bookIntro">
                    <h2>
                        <a calss="link" href="https://book.douban.com/subject/27621504/">时间的果</a>
                    </h2>
                    <p class="bookRating">
                        <!-- 评分 -->
                        <el-rate
                          v-model="value5"
                          max:10
                          disabled  
                          show-score
                          text-color="#ff9900"
                          score-template=" 8.3">
                        </el-rate>
                    </p>
                    <p class="color-gray">
                        黎戈 / 北京联合出版公司 / 2017-3 
                    </p>
                    <p class="bookDetail">
                        《时间的果》是作家黎戈的最新随笔精选集。本书分为“叶舟”和“根岸”两个部分，“叶舟”收录了作者的文学艺术评论：帕蒂斯密斯的致青春、永井荷风的慢走慢爱、爱因斯...  </p>
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
                value5: 4.5,
                favoriteLists:[]
            }
        },
        mounted: function () {
            this.$axios.get('https://www.easy-mock.com/mock/5b026b6a55348c1c9545d9ec/wusu/getMyBookList').then(res =>{
                this.favoriteLists = res.data.booklist;
                // console.log(res)
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