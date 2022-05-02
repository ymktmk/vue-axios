import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Todo from '@/components/Todo'
import store from '../store'

Vue.use(Router)

const router = new Router({
    routes: [
    {
        path: '/',
        name: 'Top',
        component: Top
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/todo',
        name: 'Todo',
        component: Todo,
        meta: { auth: true }
    },
    ]
})

router.beforeEach((to, _, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        if (store.getters.isLogin) {
            next()
        } else {
            next({ path: "/login"});
        }
    }
    next();
});

export default router