import Vue from 'vue'
import Router from 'vue-router'

import register from './pages/register.vue'
import login from './pages/login.vue'
import home from './pages/home.vue'
import home2 from './pages/home2.vue'
import bookList from './pages/bookList.vue'
import favorite from './pages/favorite.vue'
import labels from './pages/labels.vue'
import profile from './pages/profile.vue'
import book from './pages/book.vue'
import book2 from './pages/book2.vue'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    // 路由配置
    routes: [
    // {
    //     path: '/*',
    //      component: login
    // },
    {
        path: '/register',
        component: register
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/',
        component: home,
        children:[
            { path: 'bookList', component: bookList },
            { path: 'favorite', component: favorite },
            { path: 'labels', component: labels },
            { path: 'profile', component: profile },
            { path: 'book', component: book }
        ]
    }
    // , {
    //     path: '/book',
    //     component: book
    // }
    // , {
    //     path: '/book2',
    //     component: book2
    // }
    // , {
    //     path: '/favorite',
    //     component: favorite
    // }
    // , {
    //     path: '/home',
    //     component: home
    // }
    , {
        path: '/home2',
        component: home2
    }
    // , {
    //     path: '/labels',
    //     component: labels
    // }
    // , {
    //     path: '/profile',
    //     component: profile
    // }, {
    //     path: '/*',
    //     component: home
    // }
    ]
})
