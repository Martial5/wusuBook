<template>	
  <div class="labelContainer">
    <div class="newBook">
      <h1>新书速递</h1>
      </div>
      <div class="hotPics">
      <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3>{{ item }}</h3>
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
            <li v-for="n in 10" class="smallCover">
                <div class="cover">
                  <a href="https://book.douban.com/subject/27616947/?icn=index-latestbook-subject" title="刀锋之先">
                  <img src="https://img3.doubanio.com/view/subject/m/public/s29744555.jpg" class="midSize"  alt="刀锋之先">
                  </a>
                </div>
                <div class="info">
                  <div class="title">
                    <a class="titleFont" href="https://book.douban.com/subject/27616947/?icn=index-latestbook-subject" title="刀锋之先">刀锋之先</a>
                  </div>
                  <div class="author">
                    [美] 劳伦斯·布洛克
                  </div>
                </div>
            </li>
          </ul>
      </div>
      <div class="bookTag">
      <ul>
        <li class="li_tag" v-for="n in 4">
          <el-tag>标签一</el-tag>
          <el-tag type="success">标签二</el-tag>
          <el-tag type="info">标签三</el-tag>
          <el-tag type="warning">标签四</el-tag>
          <el-tag type="danger">标签五</el-tag>
          <el-tag>标签一</el-tag>
          <el-tag type="success">标签二</el-tag>
          <el-tag type="info">标签三</el-tag>
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
            }
        },
        methods:  {
             
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
