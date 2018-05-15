import Vue from 'vue'
import Router from 'vue-router'
import View1 from './views/view1.vue'
import View2 from './views/view2.vue'

import login from './pages/login.vue'
import home from './pages/home.vue'
import favorite from './pages/favorite.vue'
import labels from './pages/labels.vue'
import profile from './pages/profile.vue'
import book from './pages/book.vue'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    // 路由配置
    routes: [
    {
        path: '/view1',
        component: View1
    }, {
        path: '/view2',
        component: View2
    }
    , {
        path: '/login',
        component: login
    }
    , {
        path: '/book',
        component: book
    }
    , {
        path: '/favorite',
        component: favorite
    }
    , {
        path: '/home',
        component: home
    }
    , {
        path: '/labels',
        component: labels
    }
    , {
        path: '/profile',
        component: profile
    }, {
        path: '/*',
        component: home
    }
    ]
})
