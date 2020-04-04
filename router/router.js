import Vue from 'vue'
import Router from 'vue-router'

import Artikel from '~/pages/article.vue'
import HalamanSatu from '~/pages/Halaman/Satu/Satu.vue'

Vue.use(Router)

export function createRouter () {
    return new Router({
        mode: 'history',
        routes: [
            {
                name: 'landing',
                path: '/',
                component: Artikel
            },
            {
                name: 'Halaman Satu',
                path: '/halaman-satu',
                component: HalamanSatu
            },          
        ]
    })
}
