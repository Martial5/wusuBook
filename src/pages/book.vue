<template>
    <div id="main">
       <!-- 图书图片，简略信息，评分，按钮 -->
       <h1 style="text-align:left">
         <span style="font-size:32px">{{thisBook.book_name}}</span>
       </h1>
        <div id="bookInfo">

            <div id="bookInfo_brief">
              <div id="mainpic">
                <!-- <a>图片</a> -->
                <a>
                  <img v-bind:src="thisBook.book_cover" style="width: 135px">
                </a>
              </div>

              <div id="info">
                <!-- <a>资料</a> -->
                <span>
                  <span class="pl"> 作者</span>:
                  <a class="">{{thisBook.book_author}}</a>
                </span><br>
                <br>
                <span class="pl">出版社:</span> {{thisBook.book_publishing}}<br>
                <br>
                <span class="pl">出版年:</span> {{thisBook.book_pub_time}}<br>
                <br>
                <span class="pl">ISBN:</span> {{thisBook.book_isbn}}<br>
              </div>

            </div>

            <div id="bookInfo_score">
              <a>评分</a>
              <!-- 评分 -->
                        <el-rate
                          v-model="thisBook.book_score"
                          disabled  
                          show-score
                          text-color="#ff9900"
                          score-template="{value}">
                        </el-rate>

              <div class="save_book">
              <i class="el-icon-star-off">收藏</i>
              </div>

            <div id="bookInfo_tag">
              <a>常用标签</a>
              <div class="tag_ul">
                <ul>
                <li>
                <el-tag>{{thisBook.book_tag1}}</el-tag>
                <el-tag type="success">{{thisBook.book_tag2}}</el-tag>
                <el-tag type="info">{{thisBook.book_tag3}}</el-tag>
                <el-tag type="warning">{{thisBook.book_tag4}}</el-tag>
                </li>
                </ul>
              </div>
            </div>
            </div>

        </div>

        <!-- 图书内容简介 -->
        <div id="bookContent">
          <!-- <tagCloud></tagCloud> -->
          <a>图书内容简介</a>
          <p>
            {{thisBook.book_info}}
          </p>
        </div>

        <!-- 图书作者简介 -->
        <!-- <div id="bookAuther">
          <a>图书作者简介</a>
          <p>白云先生，其人宗于道，贵于真；其文理其所以然，而解之以其然；其学无所不窥，学不师授；其志以通万物为乐，以谋道为务，以弘道为己任。要想真正理解天下万物之奥，只有从中国文化的视角，以整体的、宏观的、全局的、自上而下的通盘研判，以道御物，才能真正理解这个世界，做到既知其然，又   知其所以然。</p>    <p>出版有畅销书《世界是红的：看懂中国经济格局的一本书》。</p>    <p>------------------------------------------------------------------------------------</p>    <p>1.作者影响力：网络文化名人，微信公号“至道学宫”粉丝近百万，半数文章阅读量十万加。</p>    <p>2.对《道德经》的独到理解：作者从《道德经》是圣王之学这一基本立足点出发，阐述了书中治国安民的至高智慧，并对后世愚人对《道德经》做出的流俗、错误的解读一一进行了反驳，起到了正本清源的作用。</p>    <p>3.写作宗旨和目的：以此治身则养身，以此治家则兴家，以此治业则功成，以此治国则天下万安。</p>    <p>4.《道德经》历史地位：内容包括政治、文化、科学、宗教等多方面，被誉为“万经之王”。自先秦以来，各种研注版本超过3000种，具有代表性的不少于1000种。</p>    <p>5.现今的价值：《道德经》是中华文明智慧及哲理的源泉，是治国、齐家、修身、为学之宝典。人生病，有医生，可社会生病了怎么办？本书从老子之道的本源出发，告诉人们道法自然，不能逆天而行，不能以人的巧伪之智来处世治国，只有顺应自然，才能国泰民安，社会和谐。作为个人，也要返璞归真，恢复自然之本性，这样才能超凡入圣，远离烦恼。</p>
        </div> -->

        <!-- 图书标签 -->
        <!-- <div id="bookTag">
          <a>图书标签</a>
        </div> -->

        <!-- 相关图书推荐 -->
        <div id="otherBooks">
          <a>喜欢读"老子之道"的人也喜欢</a>

          <div id="otherBooks_list">

  




          </div>

        </div>

    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'book',
        data() {
          return{
            thisBook:[],
          }
        },
        mounted: function () {
              var params = new URLSearchParams();
              params.append('book_id',this.$route.query.book_id);
              this.$axios.post('http://localhost:8090/book/getBook.do',params).then(res =>{
              this.thisBook = res.data.thisBook;
              })
        },
        components: { 
        }
    }

</script>

<style>
#main{
  width:1030px;
  height: 890px;
  margin:0px auto;

  /* border:1px #F00 solid; */
}

#bookInfo{
  width:1030px;
  height:210px;
  float:left;
  /*border:1px #F00 solid;*/
  /* background-color: #eee; */
}

#bookInfo_brief{
  width:500px;
  height:210px;
  float:left;

/*  border:1px #F00 solid;
  background-color: #eee;*/
}

#mainpic{
  width: 135px;
  height: 205px;
  float:left;

 /* border:1px #F00 solid;
  background-color: #eee;*/
}

#info{
  width: 260px;
  height: 205px;
  float:left;
  text-align:left;
  margin: 0 0 0 10px;

/*  border:1px #F00 solid;
  background-color: #eee;*/
}

#bookInfo_score{
  width:150px;
  height:210px;
  float:left;

/*  border:1px #F00 solid;
  background-color: #eee;*/
}

#bookInfo_tag{
  /* width:27.5%;
  height:210px; */
  width:300px;
  height:150px;
  float: left;
  margin: 0 0 0 0px;

/*  border:1px #F00 solid;
  background-color: #eee;*/
}

.save_book{
  width:200px;
  height:30px;
  margin: 10px 0 0 0;
}

.tag_ul{
  width:300px;
  height:130px;
  margin: -10px 0 0 -10px;
}

#bookContent{
  width:1030px;
  height:auto;
  text-align:left;
;



/*  border:1px #F00 solid;*/
  /* background-color: #eee; */
}

#bookAuther{
  width:1030px;
  height:auto;
  text-align:left;

/*  border:1px #F00 solid;*/
  /* background-color: #eee; */
}

#otherBooks{
  width:980px;
  height:520px;
  text-align:left;

  /*border:1px #F00 solid;*/
  /* background-color: #eee; */
}
#otherBooks_list{
  width:720px;
  height:460px;
  margin-bottom:0;
  padding-top:10px;
  margin:0 0 0 -10px ;

 /* border:1px #F00 solid;
  background-color: #eee;*/
}

.m_sub_img{
  width: 116px;
  height: 167px;
}

.book_dl{
  width: 116px;
  margin-left:13px;
  margin-right:13px;
  margin-top: 13px;
  float: left;
  text-align:center;

 /* border:1px #F00 solid;*/
}
</style>
