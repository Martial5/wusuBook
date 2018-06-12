<template>
    <div >
        <h1>我是View1</h1>
        <a @click="try1"> 尝试 </a>
        <a @click="try2"> 尝试2 </a>
        <ul>
                    <li>
            <h2>
                <a>11</a>
            </h2>
        </li>
        <li v-for="(bookList,index) in bookLists">
            <h2>
                <a>11{{bookList.book_name}}</a>
            </h2>
        </li>

        </ul>
    </div>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
    name: 'view1',
    data () {
            return{
                bookLists:[]
            }
    },
    mounted: function() {
    },
     methods:  {
         try1() {
            alert(1);
            var params = new URLSearchParams();
            params.append('param1', 'value1');
            params.append('param2', 'value2');
            this.$axios.post('http://localhost:8090/userTest/makeATry.do',params).then(res =>{
            console.log(res);
            alert(res.data.email);

            })
     },
     try2() {
            alert(2);
            this.$axios.get('http://localhost:8090/book/getBookList.do').then(res =>{
            this.bookLists = res.data.bookList;
            })
     }
    }
}
</script>

<style>
</style>
