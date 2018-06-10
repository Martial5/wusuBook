<template>
    <div >
        <h1>我是View1</h1>
        <a @click="try1"> 尝试 </a>

    </div>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
    name: 'view1',
    mounted: function() {
    },
     methods:  {
         try1() {
            alert(1);
            var params = new URLSearchParams();
            params.append('param1', 'value1');
            params.append('param2', 'value2');
            this.$axios.post('http://localhost:8080/userTest/makeATry.do',params).then(res =>{
            console.log(res);
            alert(res.data.email)
            })
     }
    }
}
</script>

<style>
</style>
