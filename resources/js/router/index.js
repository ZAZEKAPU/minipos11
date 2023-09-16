import { createWebHistory, createRouter } from "vue-router";

import Store from '../pages/Store.vue'
import Pos from '../pages/Pos.vue'
import Transection from '../pages/Transection.vue'
import Report from '../pages/Report.vue'
import Nopage from '../pages/Nopage.vue'

export const routes = [
    {
        name: 'Store',
        path: '/',
        component: Store
    },
    {
        name: 'Pos',
        path: '/Pos',
        component: Pos
    },
    {
        name: 'Transection',
        path: '/Transection',
        component: Transection
    },
    {
        name: 'Report',
        path: '/Report',
        component: Report
    },
    {
        name: 'Nopage',
        path: '/:pathMactch(.*)*',
        component: Nopage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(){
        window.scrollTo(0,0)
    },
});

export default router;