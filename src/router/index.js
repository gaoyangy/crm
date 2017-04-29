import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Signin from '@/components/Signin'
import Error_404 from '@/components/Error_404'


Vue.use(Router)


export default new Router({
    hashbang: false,
    history: true,
    routes: [{
        path: '/index',
        name: 'Index',
        component: Index
    }, {
        path: '/',
        name: 'Signin',
        component: Signin
    }, {
        path: '*',
        name: 'Error_404',
        component: Error_404
    }]
})