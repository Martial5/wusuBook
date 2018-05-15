<template>
    <div id="main">
       <!-- 图书图片，简略信息，评分，按钮 -->
       <h1 style="text-align:left">
         <span style="font-size:32px">老子之道</span>
       </h1>
          <div id="navigation">
        <navigation></navigation>  
          </div>
        <div id="bookInfo">

            <div id="bookInfo_brief">
              <div id="mainpic">
                <!-- <a>图片</a> -->
                <a href="https://img3.doubanio.com/lpic/s29659174.jpg" title="老子之道">
                  <img src="https://img3.doubanio.com/lpic/s29659174.jpg" title="点击看大图" alt="老子之道" rel="v:photo" style="width: 135px">
                </a>
              </div>

              <div id="info">
                <a>资料</a>
                <span>
                  <span class="pl"> 作者</span>:
                  <a class="">白云先生</a>
                </span><br>
                <span class="pl">出版社:</span> 江苏凤凰文艺出版社<br>
                <span class="pl">副标题:</span> 治国安民的至道真言<br>
                <span class="pl">原作名:</span> 老子之道-治国安民的至道真言<br>
                <span class="pl">出版年:</span> 2018-1<br>
                <span class="pl">页数:</span> 352<br>
                <span class="pl">定价:</span> 58.00<br>
                <span class="pl">装帧:</span> 平装<br>
                <span class="pl">ISBN:</span> 9787559411433<br>
              </div>

            </div>

            <div id="bookInfo_score">
              <a>评分</a>
              <score></score>
            </div>

            <div id="bookInfo_white">

              <!-- <a>留白</a> -->
              <tagCloud></tagCloud>
            </div>

            <!-- <div id="bookInfo_tag">


            </div> -->

        </div>

        <!-- 图书内容简介 -->
        <div id="bookContent">
          <!-- <tagCloud></tagCloud> -->
          <a>图书内容简介</a>
          <p>《道德经》，又称《道德真经》《老子》《五千言》等，是道家哲学思想的重要来源，论述修身、治国、用兵、养生之道，而多以政治为旨归，被称为“内圣外王”之学，文意深奥，包涵广博，被誉为“万经之王”。道德经分上下两篇，原文上篇《德经》、下篇《道经》，不分章，后改为《道经》在前，《德经》在后，并分为81章，全文共约五千字。</p>
        </div>

        <!-- 图书作者简介 -->
        <div id="bookAuther">
          <a>图书作者简介</a>
          <p>白云先生，其人宗于道，贵于真；其文理其所以然，而解之以其然；其学无所不窥，学不师授；其志以通万物为乐，以谋道为务，以弘道为己任。要想真正理解天下万物之奥，只有从中国文化的视角，以整体的、宏观的、全局的、自上而下的通盘研判，以道御物，才能真正理解这个世界，做到既知其然，又   知其所以然。</p>    <p>出版有畅销书《世界是红的：看懂中国经济格局的一本书》。</p>    <p>------------------------------------------------------------------------------------</p>    <p>1.作者影响力：网络文化名人，微信公号“至道学宫”粉丝近百万，半数文章阅读量十万加。</p>    <p>2.对《道德经》的独到理解：作者从《道德经》是圣王之学这一基本立足点出发，阐述了书中治国安民的至高智慧，并对后世愚人对《道德经》做出的流俗、错误的解读一一进行了反驳，起到了正本清源的作用。</p>    <p>3.写作宗旨和目的：以此治身则养身，以此治家则兴家，以此治业则功成，以此治国则天下万安。</p>    <p>4.《道德经》历史地位：内容包括政治、文化、科学、宗教等多方面，被誉为“万经之王”。自先秦以来，各种研注版本超过3000种，具有代表性的不少于1000种。</p>    <p>5.现今的价值：《道德经》是中华文明智慧及哲理的源泉，是治国、齐家、修身、为学之宝典。人生病，有医生，可社会生病了怎么办？本书从老子之道的本源出发，告诉人们道法自然，不能逆天而行，不能以人的巧伪之智来处世治国，只有顺应自然，才能国泰民安，社会和谐。作为个人，也要返璞归真，恢复自然之本性，这样才能超凡入圣，远离烦恼。</p>
        </div>

        <!-- 图书标签 -->
        <!-- <div id="bookTag">
          <a>图书标签</a>
        </div> -->

        <!-- 相关图书推荐 -->
        <div id="otherBooks">
          <a>喜欢读"老子之道"的人也喜欢</a>

          <div id="otherBooks_list">

            <div class="book_dl">
              <div>
                <a href="https://book.douban.com/subject/27607094/"><img  class="m_sub_img" src="https://img3.doubanio.com/lpic/s29642585.jpg"></a>
              </div>
              <div>
                <a href="https://book.douban.com/subject/27607094/"  class="">红楼探玉</a>
              </div>
            </div>

            <div class="book_dl">
              <div>
                <a href="https://book.douban.com/subject/27607094/"><img class="m_sub_img" src="https://img3.doubanio.com/lpic/s29682542.jpg"></a>
              </div>
              <div>
                <a href="https://book.douban.com/subject/27607094/"  class="">独步天下</a>
              </div>
            </div>

            <div class="book_dl">
              <div>
                <a href="https://book.douban.com/subject/27607094/"><img  class="m_sub_img" src="https://img3.doubanio.com/lpic/s29576285.jpg"></a>
              </div>
              <div>
                <a href="https://book.douban.com/subject/27607094/"  class="">白蛇疾闻录</a>
              </div>
            </div>
            <div class="book_dl">
              <div>
                <a href="https://book.douban.com/subject/27607094/"><img  class="m_sub_img" src="https://img1.doubanio.com/lpic/s29544018.jpg"></a>
              </div>
              <div>
                <a href="https://book.douban.com/subject/27607094/"  class="">爱你 无可救药</a>
              </div>
            </div>
            <div class="book_dl">
              <div>
                <a href="https://book.douban.com/subject/27607094/"><img  class="m_sub_img" src="https://img1.doubanio.com/lpic/s29688969.jpg"></a>
              </div>
              <div>
                <a href="https://book.douban.com/subject/27607094/"  class="">品味唐诗：去和所有欢喜的时光相遇</a>
              </div>
            </div>

            <div class="book_dl">
              <div>
                <a href="https://book.douban.com/subject/27607094/"><img  class="m_sub_img" src="https://img3.doubanio.com/lpic/s29534194.jpg"></a>
              </div>
              <div>
                <a href="https://book.douban.com/subject/27607094/"  class="">人生实难</a>
              </div>
            </div>
            <div class="book_dl">
              <div>
                <a href="https://book.douban.com/subject/27607094/"><img  class="m_sub_img" src="https://img1.doubanio.com/lpic/s29411189.jpg"></a>
              </div>
              <div>
                <a href="https://book.douban.com/subject/27607094/"  class="">最后的士绅家族（上下册）</a>
              </div>
            </div>
            <div class="book_dl">
              <div>
                <a href="https://book.douban.com/subject/27607094/"><img  class="m_sub_img" src="https://img1.doubanio.com/lpic/s29666789.jpg"></a>
              </div>
              <div>
                <a href="https://book.douban.com/subject/27607094/"  class="">近在咫尺的你</a>
              </div>
            </div>
            <div class="book_dl">
              <div>
                <a href="https://book.douban.com/subject/27607094/"><img  class="m_sub_img" src="https://img3.doubanio.com/lpic/s29617014.jpg"></a>
              </div>
              <div>
                <a href="https://book.douban.com/subject/27607094/"  class="">污点</a>
              </div>
            </div>
            <div class="book_dl">
              <div>
                <a href="https://book.douban.com/subject/27607094/"><img  class="m_sub_img" src="https://img1.doubanio.com/lpic/s29359178.jpg"></a>
              </div>
              <div>
                <a href="https://book.douban.com/subject/27607094/"  class="">互联网思维</a>
              </div>
            </div>




          </div>

        </div>

    </div>
</template>

<script type="text/javascript">
import navigation from '../components/navigation.vue'
import score from '../components/score.vue'
import tagCloud from '../components/tagCloud.vue'
    export default {
        name: 'book',

        components: { score,tagCloud,navigation
        }
    }

</script>

<style>
#main{
  width:1000px;
  margin:0px auto;

  border:1px #F00 solid;
}

#bookInfo{
  width:100%;
  height:210px;
float:left;
  /*border:1px #F00 solid;*/
  background-color: #eee;
}

#bookInfo_brief{
  width:50%;
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
  width: 360px;
  height: 205px;
  float:left;
  text-align:left;

/*  border:1px #F00 solid;
  background-color: #eee;*/
}

#bookInfo_score{
  width:15%;
  height:210px;
  float:left;

/*  border:1px #F00 solid;
  background-color: #eee;*/
}

#bookInfo_white{
  width:7.5%;
  height:210px;
  float:left;

/*  border:1px #F00 solid;
  background-color: #eee;*/
}

#bookInfo_tag{
  /* width:27.5%;
  height:210px; */
  width:27.5%;
  height:270px;

/*  border:1px #F00 solid;
  background-color: #eee;*/
}
#bookContent{
  width:100%;
  height:auto;
  text-align:left;
;



/*  border:1px #F00 solid;*/
  background-color: #eee;
}

#bookAuther{
  width:100%;
  height:auto;
  text-align:left;

/*  border:1px #F00 solid;*/
  background-color: #eee;
}

#otherBooks{
  width:100%;
  height:520px;
  text-align:left;

  /*border:1px #F00 solid;*/
  background-color: #eee;
}
#otherBooks_list{
  width:720px;
  height:460px;
  margin-bottom:0;
  padding-top:30px;
  margin:0px auto;

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
