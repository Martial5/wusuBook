<template>
      <div class="bookContainer">
        <div class="bookList_title">
            <h1>为您推荐</h1>
        </div>
        <div class="article">
          <ul>
           <li v-for="(bookList,index) in bookLists" class="smallBook">
                <a class="bookCover" @click="goThisBook(bookList.book_id)">
                <img v-bind:src="bookList.book_cover">
                </a>
                <div class="bookIntro">
                    <h2>
                        <a calss="link" @click="goThisBook(bookList.book_id)">{{bookList.book_name}}</a>
                        <input v-model="ThisBook_id" v-if="false">
                    </h2>
                    <p class="bookRating">
                        <el-rate
                          v-model="bookList.book_score"
                          disabled  
                          show-score
                          text-color="#ff9900"
                          score-template="{value}">
                        </el-rate>
                    </p>
                    <p class="color-gray">
                        {{bookList.book_author}} / {{bookList.book_publishing}} / {{bookList.book_pub_time}}
                    </p>
                    <p class="bookDetail">
                        {{bookList.book_info}}        
                    </p>
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
                // data:[],
                // value5: 4.5,
                bookLists:[],
                // booksrc:'./static/img/error_img.jpg'
                ThisBook_id : null
            }
        },
        mounted: function () {
            this.$axios.get('http://localhost:8090/book/getBookList.do').then(res =>{
                this.bookLists = res.data.bookList;
                })
        }
        ,
          methods:  {
            goThisBook(book_id){
              this.$router.push({ path: '/Book',query: {"book_id": book_id} });
            }
          }
        ,
        components:{

        }
    }
</script>

<style>
    .smallBook{
    width: 460px;
    height: 160px;
    float: left;
    margin: 0 80px 20px 0;
    }
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
    /* width: 465px; */
    width: 1200px;
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
    margin: 50px 0 0 0;
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
    height: 145px;
  }

  .bookIntro{
    width: 340px;
    height: 145px;
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
    width: 350px;
    height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap; 
    overflow: hidden;
  }

  .bookDetail{
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

  img{
    width: 100px;
    border-width: 0;
    vertical-align: middle;
  }

</style>