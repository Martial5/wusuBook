<template>	
<el-row class="container">
    <el-col :span="24" class="header">
        <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
    </el-col>
</el-row>
</template>

<script type="text/javascript">
    export default {
        name: 'favorite',
        data () {
            return{
                      activeIndex: '1',
        activeIndex2: '1'
            }
        },
        // mounted: function () {
        //     this.$axios.get('https://www.easy-mock.com/mock/5b026b6a55348c1c9545d9ec/wusu/getBookList').then(res =>{
        //         this.data = res.data;
        //         // console.log(res)
        //     })
        // }
        
          methods:  {
              handleSelect(key, keyPath) {
              console.log(key, keyPath);
            }
          }
    }
</script>
 
<style>
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
    }

    		.header {
			height: 60px;
			line-height: 60px;
			/* background: $color-primary; */
            color:#fff;
        }
</style>
