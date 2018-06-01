<template>
  	<div id="header">
          <div class="nav1">
            <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1" @click="goBookList">图书推荐</el-menu-item>
            <el-menu-item index="2" @click="goMyCollection">我的收藏</el-menu-item>
            <el-menu-item index="3" @click="goLabels">标签分类</el-menu-item>
            <el-menu-item index="4" @click="goProfile">个人主页</el-menu-item>
            </el-menu>
          </div>

  	      <div class="searchBar">
            <el-form :inline="true" :model="filters">
              <el-form-item>
                <el-input  v-model="input" placeholder="请输入内容"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" icon="el-icon-search" @click="serachBook">搜索</el-button>
              </el-form-item>
            </el-form>
          </div>

           <div class="nav2"> 
            <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1" @click="goLogin">登录</el-menu-item>
            </el-menu>
           </div>

    </div>
</template>

<script type="text/javascript">
     export default {
        name: 'header',
        data () {
            return{
                activeIndex: '1',
                activeIndex2: '1',
                input:'',
                serachBooks:[]
            }
        }
        ,
          methods:  {
              handleSelect(key, keyPath) {
              console.log(key, keyPath);
            },
            goBookList() {
              this.$router.push({ path: '/bookList' });
            }
            ,
            goMyCollection() {
              this.$router.push({ path: '/favorite' });
            }
            ,
            goLabels() {
              this.$router.push({ path: '/labels' });
            }
            ,
            goProfile() {
              this.$router.push({ path: '/profile' });
            }
            ,
            goLogin() {
              this.$router.push({ path: '/login' });
            },
            serachBook(){
              var searchInput = this.input;
              if(searchInput=='1'){
              this.$axios.get('https://www.easy-mock.com/mock/5b026b6a55348c1c9545d9ec/wusu/search').then(res =>{
                this.serachBooks = res.data.data.serachBook;
                // console.log(res_book)
              })
              var getSearch = this.serachBook.bookName;
              }
              if(searchInput==getSearch){
                this.$router.push({ path: '/bookList' });
              }
              else{
                this.$router.push({ path: '/labels' });
              }

            }
          
          }
        // ,
        // components:{
        //   searchBar
        // }
    }
</script>

<style>
.searchBar{
  position: relative;
  left:140px;
  top:10px;
  width: 480px;
  height: 60px;
  float: left;

}

  .nav1{
    width: 400px;
    height: 60px;
    float: left;
    margin: 0 0 0 140px;
  }

  .nav2{
    width: 100px;
    height: 60px;
    float: left;
    /* margin: 0 0 0 572px; */
    margin: 0 0 0 117px;
  }
</style>
