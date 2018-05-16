<template>

    <div id="main">

<!--       <div id="searchBar">
        <searchBar></searchBar>
      </div>
 -->
      <div id="navigation">
        <navigation></navigation>  
      </div>
          
      <div id="books_left">
      </div>

      <div id="books_right">
      </div>

      <div id="books_left">
      </div>

      <div id="books_right">
      </div>

    </div>
</template>

<script type="text/javascript">
import navigation from '../components/navigation.vue'
import searchBar from '../components/searchBar.vue'
    export default {
        name: 'home',

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
  height: 40px;
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
