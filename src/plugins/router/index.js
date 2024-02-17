import { createRouter, createWebHashHistory } from 'vue-router'
import { routerLayout } from '@/plugins/router/router-layout.js'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home/HomePage.vue'),
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('@/pages/catalog/CatalogPage.vue'),
      meta: {
        layout: 'catalog',
      },
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  await routerLayout(to)
  next()
});
export default router
