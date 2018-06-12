<template>
      <div class="showBookbookContainer">
        <div class="showBookbookList_title">
            <h1>搜索内容</h1>
        </div>
        <div class="showBookarticle">
          <ul>
           <li v-for="(serachBook,index) in serachBooks" class="showBooksmallBook">
                <a class="showBookbookCover" href="https://book.douban.com/subject/27621504/">
                <img v-bind:src="serachBook.book_cover" class="showBook">
                </a>
                <div class="showBookbookIntro">
                    <h2 class="showBook">
                        <a calss="link" href="https://book.douban.com/subject/27621504/">{{serachBook.book_name}}</a>
                    </h2>
                    <p class="showBookbookRating">
                        <el-rate
                          v-model="serachBook.book_score"
                          disabled  
                          show-score
                          text-color="#ff9900"
                          score-template="{value}">
                        </el-rate>
                    </p>
                    <p class="showBookcolor-gray">
                        {{serachBook.book_author}} / {{serachBook.book_publishing}} / {{serachBook.book_pub_time}}
                    </p>
                    <p class="showBookbookDetail">
                        {{serachBook.book_info}}        
                    </p>
                </div>
            </li>
          </ul>
        </div>

        <div class="showBookpage">
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
              serachBooks:[]
            }
        }
        ,
        mounted: function () {
              var params = new URLSearchParams();
              params.append('book_name', this.$route.query.book_name);
              if(this.$route.query.book_name!=null){
              this.$axios.post('http://localhost:8090/book/findBookByName.do',params).then(res =>{
                this.serachBooks = res.data.ShowBookList;
              })
              }
        }
        ,
          methods:  {

          }
        ,
        components:{

        }
    }
</script>

<style>
    .showBooksmallBook{
    width: 460px;
    height: 160px;
    float: left;
    margin: 0 80px 20px 0;
    }
  .showBookbookList_title{
    width: 900px;
    height: 50px;
    float: left;
  }
  
  .showBookbookContainer{
    height: 890px;
	  width:1030px;
    margin: 0 auto;
  }

  li.showBook{
    height: 145px;
    overflow: hidden;
    margin: 0 0 30px 0;
  }

  .showBookarticle{
    /* width: 465px; */
    width: 1200px;
    float: left;
    margin: 0 0 0 0px;
  }

  .showBookpage{

    width:1000px;
    float: left;
    text-align: center;
    margin: 50px 0 0 0;
  }

  h2.showBook{
    display: block;
    font: 15px Arial, Helvetica, sans-serif;
    color: #37a;
    /* font-weight: bold; */
    margin:0 0 0 0;
  }

  a.showBook{
    text-decoration: none;
  }

  .showBookbookCover{
    float: left;
    display: block;
    width: 100px;
    height: 145px;
  }

  .showBookbookIntro{
    width: 340px;
    height: 145px;
    margin-left: 120px;
  }

  .showBookbookRating{
    /* width: 240px; */
    height: 13px;
    
  }

  .showBookcolor-gray{
    color: #666;
    font-size: 14px;
    margin:0 0 5px 0;
    width: 350px;
    height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap; 
    overflow: hidden;
  }

  .showBookbookDetail{
    width: 340px;
    height: 56px;
    font-size: 14px;
    margin:0 0 0 0;
    text-overflow: ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3; 
    overflow: hidden;

  }

  img.showBook{
    width: 100px;
    border-width: 0;
    vertical-align: middle;
  }

</style>