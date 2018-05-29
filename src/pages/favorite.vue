<template>	
	<el-container>
        <el-header>
        <headerBar></headerBar>
      </el-header>
      <el-main>
      </el-main>
	</el-container>
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
	  width:1040px;
	  margin:0px auto;
  }

</style>
