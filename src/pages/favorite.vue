<template>
	<div class="favoriteContainer">
        <div class="favorite_title">
            <h1>我的收藏</h1>
        </div>
        
        <div>
        <div class="favoritearticle">
          <ul>
            <li v-for="(favoriteList,index) in favoriteLists" class="favoritesmallBook">
                <a class="favoritebookCover" href="https://book.douban.com/subject/27621504/">
                <img v-bind:src="favoriteList.book_cover" class="favoriteimg">
                </a>
                <div class="favoritebookIntro">
                    <h2 class="favoriteH2">
                        <a calss="link" href="https://book.douban.com/subject/27621504/">{{favoriteList.book_name}}</a>
                    </h2>
                    <p class="favoritebookRating">
                        <el-rate
                          v-model="favoriteList.book_score"
                          disabled  
                          show-score
                          text-color="#ff9900"
                          score-template="{value}">
                        </el-rate>
                    </p>
                    <p class="favoritecolor-gray">
                        {{favoriteList.book_author}} / {{favoriteList.book_publishing}} / {{favoriteList.book_pub_time}}
                    </p>
                    <p class="favoritebookDetail">
                        {{favoriteList.book_info}}        
                    </p>
                </div>
            </li>
           
          </ul>
        </div>

        
        </div>
        <div class="favoritepage">
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
            // this.$axios.get('https://www.easy-mock.com/mock/5b026b6a55348c1c9545d9ec/wusu/getMyBookList').then(res =>{
            //     this.favoriteLists = res.data.booklist;
            //     // console.log(res)
            // })
            this.$axios.get('http://localhost:8090/userFavorite/findUserFavorite.do').then(res =>{
                this.favoriteLists = res.data.favoriteList;
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
  .favoritesmallBook{
    width: 460px;
    height: 160px;
    float: left;
    margin: 0 80px 20px 0;
  }

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

  /* li.favoriteli{
    height: 145px;
    overflow: hidden;
    margin: 0 0 30px 0;
  } */

  .favoritearticle{
    width: 1200px;
    float: left;
    margin: 0 0 0 0px;
  }

  .favoriteaside{
    width: 465px;
    float: left;
    margin: 0 0 0 70px;
  }

  .favoritepage{

    width:1000px;
    float: left;
    text-align: center;
    margin: 0 auto;
  }

  h2.favoriteH2{
    display: block;
    font: 15px Arial, Helvetica, sans-serif;
    color: #37a;
    /* font-weight: bold; */
    margin:0 0 0 0;
  }


  a.favoritebookCover{
    text-decoration: none;
    float: left;
    display: block;
    width: 100px;
  }

  .favoritebookIntro{
    width: 340px;
    height: 132px;
    margin-left: 120px;
  }

  .favoritebookRating{
    /* width: 240px; */
    height: 13px;
    
  }

  .favoritecolor-gray{
    color: #666;
    font-size: 14px;
    margin:0 0 5px 0;
    width: 350px;
    height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap; 
    overflow: hidden;
  }

  .favoritebookDetail{
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

  img.favoriteimg{
    width: 100px;
    border-width: 0;
    vertical-align: middle;
  }

</style>