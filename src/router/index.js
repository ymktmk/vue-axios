import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'

Vue.use(Router)

const router = new Router({
    routes: [
    {
        path: '/',
        name: 'Top',
        component: Top
    },
    ]
})

export default router