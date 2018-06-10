<template>
      <div class="bookContainer">
        <div class="bookList_title">
            <h1>为您推荐</h1>
        </div>
        <div class="article">
          <ul>
            <!-- v-for="n in 4" -->
            <li >
                <a class="bookCover">
                <img src="https://img3.doubanio.com/view/subject/m/public/s29745380.jpg">
                </a>
                <div class="bookIntro">
                    <h2>
                        <a>小小小小的火</a>
                    </h2>
                    <p class="bookRating">
                        <!-- 评分 -->
                        <el-rate
                          v-model="value5"
                          disabled  
                          show-score
                          text-color="#ff9900"
                          score-template="8.5">
                        </el-rate>
                    </p>
                    <p class="color-gray">
                        作者：[美] 伍绮诗 / 小说 / 美国文学
                    </p>
                    <p class="bookDetail">
                        面对人生，我们该如何做出选择，在选择的基础上坚守什么、放弃什么。——这是小说的内核，也是现实中每个人需要面对的问题。       
                    </p>
                </div>
            </li>
            <li >
                <a class="bookCover">
                <img src="https://img3.doubanio.com/view/subject/m/public/s29725620.jpg">
                </a>
                <div class="bookIntro">
                    <h2>
                        <a>镖人</a>
                    </h2>
                    <p class="bookRating">
                        <!-- 评分 -->
                        <el-rate
                          v-model="value5"
                          disabled  
                          show-score
                          text-color="#ff9900"
                          score-template="8.6">
                        </el-rate>
                    </p>
                    <p class="color-gray">
                        作者：许先哲 漫画 / 武侠 / 硬派
                    </p>
                    <p class="bookDetail">
                       在正义缺失的时代，我们需要的不是银鞍照白马，飒沓如流星的身怀绝世武功的大侠，来拯救弱者于水火。 
                    </p>
                </div>
            </li>
            <li >
                <a class="bookCover">
                <img src="https://img3.doubanio.com/view/subject/m/public/s29680575.jpg">
                </a>
                <div class="bookIntro">
                    <h2>
                        <a>坏狐狸</a>
                    </h2>
                    <p class="bookRating">
                        <!-- 评分 -->
                        <el-rate
                          v-model="value5"
                          disabled  
                          show-score
                          text-color="#ff9900"
                          score-template=" 8.9">
                        </el-rate>
                    </p>
                    <p class="color-gray">
                        作者：[法] 本杰明·雷内 编绘

绘本 / 漫画 / 法国
                    </p>
                    <p class="bookDetail">
                        大吉大利，今晚吃鸡           </p>
                </div>
            </li>
            <li >
                <a class="bookCover">
                <img src="https://img3.doubanio.com/view/subject/m/public/s29707420.jpg">
                </a>
                <div class="bookIntro">
                    <h2>
                        <a>如父如子</a>
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
                        作者：[日] 是枝裕和 / [日] 佐野晶

日本 / 小说
                    </p>
                    <p class="bookDetail">
                        只要有爱，就会找到出口。  </p>
                </div>
            </li>
          </ul>
        </div>

        <div class="aside">
          <ul>
            <!-- v-for="(bookList,index) in bookLists" -->
            <!-- <li >
                <a class="bookCover" href="https://book.douban.com/subject/27621504/">
                <img src="https://img3.doubanio.com/view/subject/m/public/s29762485.jpg">
                </a>
                <div class="bookIntro">
                    <h2>
                        <a calss="link" href="https://book.douban.com/subject/27621504/">{{bookList.bookName}}</a>
                    </h2>
                    <p class="bookRating">
                        <el-rate
                          v-model="bookList.bookRating"
                          disabled  
                          show-score
                          text-color="#ff9900"
                          score-template="{value}">
                        </el-rate>
                    </p>
                    <p class="color-gray">
                        {{bookList.bookAuthor}} / {{bookList.bookPub}} / {{bookList.bookDate}}
                    </p>
                    <p class="bookDetail">
                        {{bookList.bookDetail}}        
                    </p>
                </div>
            </li> -->
                       <li >
                <a class="bookCover">
                <img src="https://img1.doubanio.com/view/subject/m/public/s29721129.jpg">
                </a>
                <div class="bookIntro">
                    <h2>
                        <a>何看懂艺术</a>
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
                        作者：翁昕

艺术 / 艺术史 / 意大利
                    </p>
                    <p class="bookDetail">
                        去相信自己的眼睛和感觉，这才是阅读艺术的第一步。   </p>
                </div>
            </li>
                       <li >
                <a class="bookCover">
                <img src="https://img3.doubanio.com/view/subject/m/public/s29763183.jpg">
                </a>
                <div class="bookIntro">
                    <h2>
                        <a>舆论</a>
                    </h2>
                    <p class="bookRating">
                        <!-- 评分 -->
                        <el-rate
                          v-model="value5"
                          disabled  
                          show-score
                          text-color="#ff9900"
                          score-template="9.1">
                        </el-rate>
                    </p>
                    <p class="color-gray">
                        [美]沃尔特·李普曼 / 北京大学出版社 / 2018-5-1
                    </p>
                    <p class="bookDetail">
                        传播学领域的奠基之作，第一次对公共舆论做了全景式的描述，梳理了舆论研究中一系列难以回避的问题，比如舆论从哪里来？它是怎样形成的？它能造成什么样的结果？谁是公众？  </p>
                </div>
            </li>
                       <li >
                <a class="bookCover">
                <img src="https://img1.doubanio.com/view/subject/m/public/s29769408.jpg">
                </a>
                <div class="bookIntro">
                    <h2>
                        <a>单身女性的时代
</a>
                    </h2>
                    <p class="bookRating">
                        <!-- 评分 -->
                        <el-rate
                          v-model="value5"
                          disabled  
                          show-score
                          text-color="#ff9900"
                          score-template="9.5">
                        </el-rate>
                    </p>
                    <p class="color-gray">
                        [美]丽贝卡·特雷斯特 / 广西师范大学出版社 / 2018-5
                    </p>
                    <p class="bookDetail">
                        一部关于21世纪美国单身女性议题的纪实作品。有叱咤职场的女强人，有兼两份零工的单亲妈妈，有敢爱敢恨的女大学生。单身女性正在这个本不是为她们设计的世界里，逐渐占据...  </p>
                </div>
            </li>
                       <li >
                <a class="bookCover">
                <img src="https://img3.doubanio.com/view/subject/m/public/s29770773.jpg">
                </a>
                <div class="bookIntro">
                    <h2>
                        <a>风格感觉</a>
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
                        [美] 史蒂芬·平克 / 机械工业出版社 / 2018-5
                    </p>
                    <p class="bookDetail">
                        一部无可替代的写作指南。它结合现代语言学和认知科学，从思维的高度分析写作技巧，告诉21世纪互联网时代的写作者，如何清晰简洁地向读者展示事实和思想，如何有效运用语...  </p>
                </div>
            </li>
          </ul>
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
                bookLists:[]
            }
        },
        mounted: function () {
            this.$axios.get('https://www.easy-mock.com/mock/5b026b6a55348c1c9545d9ec/wusu/getMyBookList').then(res =>{
                this.bookLists = res.data.booklist;
                // console.log(res_book)
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
  .bookList_title{
    width: 900px;
    height: 50px;
    float: left;
  }
  
  .bookContainer{
    height: 890px;
	  width:1030px;
    margin: 0 auto;
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

  .bookCover{
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