<template>
	<el-container>
  		<el-header>

      </el-header>

  		<el-main>
        <!-- gutter表示栅格的间距 -->
        <el-row :gutter="40">
            <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </el-main>

	</el-container>
</template>

<script>

</script>

<style>
  .el-header {
	  position:absolute;
	  top:0px;
	  bottom:0px;
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 115px;
	  width:100%;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 960px;
	  width:1040px;
	  margin:0px auto;
  }

  .el-row {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
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
    min-height: 145px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>