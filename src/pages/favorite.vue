<template>	
    <ul>
        <li v-for="(item,key) in data">{{item}}</li>
    </ul>   
</template>

<script type="text/javascript">
    export default {
        name: 'favorite',
        data () {
            return{
                data:[]
            }
        },
        mounted: function () {
            this.$ajax.get('/api/data').then(res =>{
                this.data = res.data;
                console.log(res)
            })
        }
    }
</script>
 
<style>
</style>
