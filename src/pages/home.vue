<template>
	<el-container>
  		<el-header>
        <headerBar></headerBar>
      </el-header>

  		<el-main>
        <transition name="fade" mode="out-in">
					<router-view></router-view>
				</transition>
      </el-main>
	</el-container>
</template>

<script>
  import headerBar from '../components/header.vue'

      export default {
        name: 'home2',
        data () {
            return{
                data:[],
                value5: 3.7,
                // activeIndex: '1',
                // activeIndex2: '1'
            }
        }
        // mounted: function () {
        //     this.$axios.get('https://www.easy-mock.com/mock/5b026b6a55348c1c9545d9ec/wusu/getBookList').then(res =>{
        //         this.data = res.data;
        //         console.log(res)
        //     })
        // }
        // ,
        //   methods:  {
        //       handleSelect(key, keyPath) {
        //       console.log(key, keyPath);
        //     }
        //   }
        ,
        components:{
          headerBar
        }
    }
</script>

<style>
  /* h1{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  } */

  .el-container {
    margin:0 0 0 0; 
  }

  .el-header {
	  position:absolute;
	  top:0px;
	  bottom:0px;
    background-color: #545c64;
    
    color: #333;
    text-align: left;
    line-height: 115px;
    width:100%;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    height: 960px;
	  width:1100px;
	  margin:0px auto;
  }

  .el-row {
    margin-bottom: 30px;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-col {
    border-radius: 4px;
    height: 60px;
    overflow: hidden;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 145px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>