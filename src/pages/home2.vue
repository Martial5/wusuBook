<template>
	<!-- <el-row class="container">
		<el-row>
 	 		<el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
		</el-row>
		<el-row>
			<el-col :span="20">
				<div class="grid-content bg-purple-dark"></div>
			</el-col>
			<el-col :span="4">
				<div class="grid-content bg-purple-dark"></div>
			</el-col>
		</el-row>
		<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
	</el-row> -->
	<el-container>
  		<el-header>Header</el-header>
  		<el-main>Main</el-main>
	</el-container>
</template>

<script>

</script>

<style>
	/* .container{
		position:absolute;
		top:0px;
		bottom:0px;
		width:100%;

	} */

 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

    .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

    body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  /* .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
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
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  } */
</style>