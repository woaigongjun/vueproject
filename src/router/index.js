import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
 //   mode:"history",
    routes: [
        {
            path: '/',
            name: 'home',
            component: ()=>import('@/views/home/home')
        },
        {
            path: '/login',
            name: 'login',
            component: ()=>import('@/login')
        },
        {
            path: '/register',
            name: 'register',
            component: ()=>import('@/login/register')
        },
        {
            path: '/detail',
            name: 'detail',
            component: ()=>import('@/views/goodsDetail')
        },
        {
            path: '/shoppingCart',
            name: 'shoppingCart',
            component: ()=>import('@/views/shoppingCart')
        },


    ]
})
