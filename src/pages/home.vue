<template>

    <div id="main">

      <!-- <div id="searchBar">
        <searchBar></searchBar>
      </div> -->

      <div id="navigation">
        <navigation></navigation>  
      </div>

      <!-- <div v-for="(item,key) in data">
        <div id="books_left">
          {{item}}
        </div>

        <div id="books_right">
          {{item}}
        </div> -->

      <div id="books_left">
      </div>

      <div id="books_right">
      </div>
      <!-- </div> -->

    </div>
</template>

<script type="text/javascript">
import navigation from '../components/navigation.vue'
import searchBar from '../components/searchBar.vue'
    export default {
        name: 'home',
        data () {
            return{
                data:[]
            }
        },
        mounted: function () {
            this.$axios.get('https://www.easy-mock.com/mock/5b026b6a55348c1c9545d9ec/wusu/getBookList').then(res =>{
                this.data = res.data;
                // console.log(res)
            })
        },
        components:{navigation,searchBar
        }
    }
</script>

<style>
#main{
  width: 1000px;
  height: 1000px;
  margin:0px auto;

  border:1px #F00 solid;
  background-color: #eee;
}

#searchBar{
  width: 1000px;
  height: 40px;
  float: left;
  border:1px #F00 solid;
  background-color: #eee;

}

#navigation{
  width: 1000px;
  height: 60px;
  float: left;
  border:1px #F00 solid;
  background-color: #eee;

}

#books_left{
  width: 460px;
  height: 145px;
  float: left;
  border:1px #F00 solid;
  background-color: #eee;

}

#books_right{
  width: 460px;
  height: 145px;
  float: right;
  border:1px #F00 solid;
  background-color: #eee;

}
</style>
