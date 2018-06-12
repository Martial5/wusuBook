<template>	
  <div class="label_labelContainer">
    <div class="label_newBook">
      <h1>新书速递</h1>
      </div>
      <!-- 新书卡片轮播 -->
      <div class="label_hotPics">
      <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item>
        <div class="label_newBook_cover"><img v-bind:src="cards.cards3" class="label_midSize"></div>
        <div class="label_newBook_info">
          <p>数亿人次抢看，豆瓣9.9分高评！</p>
          <p>历时5年制作，125次探险，</p>
          <p>全球39个国家，6000小时水下拍摄！</p>
          <p>尖端科技装备，全程4K高清，抵达深海禁区！</p>
          <p>众多首次发现，升级思维，刷新认知！</p>
          <p>自然纪录片之父大卫•爱登堡作序推荐！</p>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="label_newBook_cover"><img v-bind:src="cards.cards2" class="label_midSize"></div>
        <div class="label_newBook_info">
          <p>★名家推荐</p>
          <p>©“两位美国传奇人物笔下创作的政治悬疑小说。《失踪的总统》教育和激励我们所有人将国家放在政治之前。</p>
          <p>尔•克林顿展示了政治的艺术，而詹姆斯•帕特森则展现了绝佳的写作技巧，为读者显呈现了一个精彩的故事。”</p>
          <p>—— 尼尔森•德米勒（Nelson DeMille），美国畅销书作家，侦探小说家，著有《古巴事件》《黄金海岸》《小城风云》等</p>

        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="label_newBook_cover"><img v-bind:src="cards.cards1" class="label_midSize"></div>
        <div class="label_newBook_info">
          <p>「旅行的意义是什么？是活着回家。

相信我，旅行没有什么意义。」</p>
          <p>马赛马拉、锡瓦、泰德罗、恒河、科伦坡、大巴哈

六个炎热国土上发生的非典型旅行故事，六段问题重重且无法解决的孤独人生。</p>
<p>在肯尼亚马赛马拉的草原上，我女朋友许下了25岁的生日愿望，希望我死于象蹄。</p>
        </div>
      </el-carousel-item>
      </el-carousel>
	    </div>
    <div class="label_popularBook">
      <h1>最受欢迎图书</h1>
    </div>
    <div class="label_tag_title">
      <h1>标签页</h1>
    </div>
    <div class="label_labelMain">
      <div class="label_hotBooks">
          <ul>
            <li v-for="(hotBookList,index) in hotBookLists" class="label_smallCover">
                <div class="cover">
                  <a href="https://book.douban.com/subject/27616947/?icn=index-latestbook-subject">
                  <img v-bind:src="hotBookList.book_cover"  class="label_midSize"  alt="暂无图片">
                  </a>
                </div>
                <div class="label_info">
                  <div class="label_title">
                    <a class="label_titleFont" href="https://book.douban.com/subject/27616947/?icn=index-latestbook-subject" title="刀锋之先">{{hotBookList.book_name}}</a>
                  </div>
                  <div class="label_author">
                    {{hotBookList.book_author}}
                  </div>
                </div>
            </li>
            
          </ul>
      </div>
      <div class="label_bookTag">
      <ul>
        <!-- <li class="li_tag" v-for="tagList in tagLists">
          <el-tag>{{tagList.tag1}}</el-tag>
          <el-tag>{{tagList.tag2}}</el-tag>
          <el-tag>{{tagList.tag3}}</el-tag>
          <el-tag>{{tagList.tag4}}</el-tag>
   
        </li> -->
          <li class="label_li_tag">
          <el-tag>小说</el-tag>
          <el-tag>随笔</el-tag>
          <el-tag>日本文学</el-tag>
          <el-tag>散文</el-tag>
          
          </li>
          <li class="label_li_tag">
          <el-tag>诗歌</el-tag>
          <el-tag>科幻</el-tag>
          <el-tag>青春</el-tag>
          <el-tag>奇幻</el-tag>
          </li>
          <li class="label_li_tag">
          <el-tag>武侠</el-tag>
          <el-tag>历史</el-tag>
          <el-tag>哲学</el-tag>
          <el-tag>传记</el-tag>
          </li>
          <li class="label_li_tag">
          <el-tag>励志</el-tag>
          <el-tag>旅行</el-tag>
          <el-tag>职场</el-tag>
          <el-tag>经济学</el-tag>
          </li>
      </ul>
      </div>
    </div>
  </div> 
</template>

<script type="text/javascript">
    export default {
        name: 'favorite',
        data () {
            return{
              cards:{
                cards1:"./static/label/s29743997.jpg",
                cards2:"./static/label/s29774114.jpg",
                cards3:"./static/label/s29781195.jpg",
              },
              hotBookLists:[],
              tagLists:[]
            }
        },
        methods:  {
             
        },
        mounted: function () {
            this.$axios.get('http://localhost:8090/userTag/getHotBook.do').then(res =>{
                this.hotBookLists = res.data.hotBookList;
                // console.log(res_book)
            })
            this.$axios.get('https://www.easy-mock.com/mock/5b026b6a55348c1c9545d9ec/wusu/tagList').then(res =>{
                this.tagLists = res.data.data.tagList;
                // console.log(res_book)
            })
        },
        methods:{
          // imgError(item) {
          //   item.img = require('../images/error_img.jpg');
          // }       
        }
    }
</script>
 
<style>
  .label_labelContainer{
    height: 890px;
	  width:1030px;
    margin: 0 auto;
  }

  p.label_newBook_info{
    text-indent:2em;
  }

  .label_newBook_cover{
    width: 115px;
    height: 140px;
    margin: 15px 0 0 10px ;
    float: left;
  }

  .label_newBook_info{
    width: 360px;
    height: 185px;
    float: left;
    margin: 0 0 0 10px;
  }

  .label_hotPics{
    width: 1000px;
    height: 200px;
    float: left;
  }

  .label_newBook{
    width: 1000px;
    height: 50px;
    float: left;
    margin: 0 0 20px 0;
  }

  .label_labelMain{
    height: 550px;
	  width:1030px;
    margin: 0 auto;
  }
  
  .label_popularBook{
    width: 660px;
    height: 50px;
    float: left;
  }

  .label_tag_title{
    width: 220px;
    height: 50px;
    margin: 0 0 0 60px;
    float: left;
  }

  .label_bookTag{
    width: 255px;
    float: left;
    margin: 2px 0px 0px 18px
  }

  .label_hotBooks{
    width: 700px;
    float: left;
    /* margin: 0 0 0 20px; */
  }

  .label_smallCover{
    width: 115px;
    height: 219px;
    text-overflow: ellipsis;
    margin: 0px 24px 16px 0px;
    float: left;
  }

  img.label_midSize{
    width: 115px;
    height: 172px;
    border-width: 0;
    vertical-align: middle;
    float: left;
  }

  .label_info{
    width: 115px;
    height: 34px;
    text-align:center
  }

  a.label_titleFont{
    width: 103px;
    font-size: 13px;
    text-decoration: none;
  }

  .label_title{
    width: 103px;
    height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap; 
    overflow: hidden;
  }

  .label_cover{
    margin: 2px 0;
  }

  .label_author{
    width: 103px;
    font-size: 13px;
    margin: 2px 0;
    height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap; 
    overflow: hidden;
  }

  .label_li_tag{
    height: 80px;
    margin:  0 0 -10px 0;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
