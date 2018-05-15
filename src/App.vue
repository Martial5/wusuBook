<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <firstcomponent></firstcomponent> -->
    <!-- <score></score> -->
    <!-- <router-link to="/view1">Go to view1</router-link>
    <router-link to="/view2">Go to view2</router-link> -->
    <!-- <article class="container">
                <div id="demo9" class="demo">
                    <h2>Disabled</h2>
                    <span class="ratyli" data-rate="3"></span>
                </div>
    </article> -->
    <router-link to="/home">Go to home</router-link>
    <router-link to="/favorite">Go to favorite</router-link>
    <router-link to="/login">Go to login</router-link>
    <router-link to="/labels">Go to labels</router-link>
    <router-link to="/profile">Go to profile</router-link>
    <router-link to="/book">Go to book</router-link>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>

  </div>
</template>

<script>
import firstcomponent from './components/firstcomponent.vue'
// import score from './components/score.vue'

export default {
　　name: 'app',
    mounted(){
      $("body").css("background","black");   //jquery语法
    },
　　data () {
　　　　return {
　　　　　　msg: 'Welcome to Your Vue.js App'
　　　　}
　　},
　　components: { firstcomponent  }
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
