<template>
  	<el-header>
        <div id="navigation">
            <navigation></navigation>  
        </div>
    </el-header>
</template>

<script type="text/javascript">
    import navigation from '../components/navigation.vue'
    export default {
        name: 'header',
        data () {

        },
        mounted: function () {

        },
        components:{navigation
        }
    }
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
</style>
