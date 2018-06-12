import Vue from 'vue'
import Router from 'vue-router'
import register from './pages/register.vue'
import login from './pages/login.vue'
import home from './pages/home.vue'
import bookList from './pages/bookList.vue'
import showBook from './pages/showBook.vue'
import favorite from './pages/favorite.vue'
import labels from './pages/labels.vue'
import profile from './pages/profile.vue'
import book from './pages/book.vue'
import view1 from './views/view1.vue'

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
            { path: 'book', component: book },
            {path:  'showBook',component: showBook}
        ]
    }
    // , {
    //     path: '/book',
    //     component: book
    // }
    , {
        path: '/view1',
        component: view1
    }
    // , {
    //     path: '/favorite',
    //     component: favorite
    // }
    // , {
    //     path: '/home',
    //     component: home
    // }

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
