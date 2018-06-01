<template>	
  <div class="labelContainer">
    <div class="newBook">
      <h1>新书速递</h1>
      </div>
      <!-- 新书卡片轮播 -->
      <div class="hotPics">
      <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="newBook_cover"><img src="https://img3.doubanio.com/view/subject/m/public/s29781195.jpg" class="midSize"></div>
        <div class="newBook_info">
          <p>数亿人次抢看，豆瓣9.9分高评！</p>
          <p>历时5年制作，125次探险，</p>
          <p>全球39个国家，6000小时水下拍摄！</p>
          <p>尖端科技装备，全程4K高清，抵达深海禁区！</p>
          <p>众多首次发现，升级思维，刷新认知！</p>
          <p>自然纪录片之父大卫•爱登堡作序推荐！</p>
        </div>
      </el-carousel-item>
      </el-carousel>
	    </div>
    <div class="popularBook">
      <h1>最受欢迎图书</h1>
    </div>
    <div class="tag_title">
      <h1>标签页</h1>
    </div>
    <div class="labelMain">
      <div class="hotBooks">
          <ul>
            <li v-for="(hotBookList,index) in hotBookLists" class="smallCover">
                <div class="cover">
                  <a href="https://book.douban.com/subject/27616947/?icn=index-latestbook-subject" title="刀锋之先">
                  <img src="https://img3.doubanio.com/view/subject/m/public/s29744555.jpg" class="midSize"  alt="刀锋之先">
                  </a>
                </div>
                <div class="info">
                  <div class="title">
                    <a class="titleFont" href="https://book.douban.com/subject/27616947/?icn=index-latestbook-subject" title="刀锋之先">{{hotBookList.bookName}}</a>
                  </div>
                  <div class="author">
                    {{hotBookList.bookAuthor}}
                  </div>
                </div>
            </li>
          </ul>
      </div>
      <div class="bookTag">
      <ul>
        <li class="li_tag" v-for="tagList in tagLists">
          <el-tag>{{tagList.tag1}}</el-tag>
          <el-tag>{{tagList.tag2}}</el-tag>
          <el-tag>{{tagList.tag3}}</el-tag>
          <el-tag>{{tagList.tag4}}</el-tag>
   
        </li>
      </ul>
      </div>
    </div>
  </div> 
</template>

<script type="text/javascript">
 import headerBar from '../components/header.vue'
    export default {
        name: 'favorite',
        data () {
            return{
              hotBookLists:[],
              tagLists:[]
            }
        },
        methods:  {
             
        },
        mounted: function () {
            this.$axios.get('https://www.easy-mock.com/mock/5b026b6a55348c1c9545d9ec/wusu/getMyBookList').then(res =>{
                this.hotBookLists = res.data.booklist;
                // console.log(res_book)
            })
            this.$axios.get('https://www.easy-mock.com/mock/5b026b6a55348c1c9545d9ec/wusu/tagList').then(res =>{
                this.tagLists = res.data.data.tagList;
                // console.log(res_book)
            })
        },
        components:{
          headerBar
        }
    }
</script>
 
<style>
  .labelContainer{
    height: 890px;
	  width:1030px;
    margin: 0 auto;
  }

  newBook_info.p{
    text-indent:2em;
  }

  .newBook_cover{
    width: 115px;
    height: 140px;
    margin: 15px 0 0 10px ;
    float: left;
  }

  .newBook_info{
    width: 360px;
    height: 185px;
    float: left;
    margin: 0 0 0 10px;
  }

  .hotPics{
    width: 1000px;
    height: 200px;
    float: left;
  }

  .newBook{
    width: 1000px;
    height: 50px;
    float: left;
    margin: 0 0 20px 0;
  }

  .labelMain{
    height: 550px;
	  width:1030px;
    margin: 0 auto;
  }
  
  .popularBook{
    width: 660px;
    height: 50px;
    float: left;
  }

  .tag_title{
    width: 220px;
    height: 50px;
    margin: 0 0 0 60px;
    float: left;
  }

  .bookTag{
    width: 255px;
    float: left;
    margin: 2px 0px 0px 18px
  }

  .hotBooks{
    width: 700px;
    float: left;
    /* margin: 0 0 0 20px; */
  }

  .smallCover{
    width: 115px;
    height: 219px;
    text-overflow: ellipsis;
    margin: 0px 24px 16px 0px;
  }

  img.midSize{
    width: 115px;
    height: 172px;
    border-width: 0;
    vertical-align: middle;
  }

  .info{
    width: 115px;
    height: 34px;
  }

  a.titleFont{
    width: 103px;
    font-size: 13px;
    text-decoration: none;
  }

  .title{
    width: 103px;
    height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap; 
    overflow: hidden;
  }

  .cover{
    margin: 2px 0;
  }

  .author{
    width: 103px;
    font-size: 13px;
    margin: 2px 0;
    height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap; 
    overflow: hidden;
  }

  .li_tag{
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
