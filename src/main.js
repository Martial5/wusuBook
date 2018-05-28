import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import App from './App.vue';
import router from './router.js';
// import Mock from './mock'
// Mock.init()
// import Mock from './mock'
// Mock.bootstrap();
// require('./mock/mock.js')
require('./mock.js')
Vue.prototype.$axios = axios
Vue.use(ElementUI);


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
