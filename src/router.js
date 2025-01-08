import { createRouter, createMemoryHistory } from 'vue-router'
import Collections from './components/Collections/Collections.vue'
import About from './components/About/About.vue'
import Brands from './components/Brands/Brands.vue'
import Home from './components/Home/Home.vue'
const routes = [
    {path:'/', component: Home},
    {path:'/collections', component: Collections},
    {path:'/about', component: About},
    {path:'/brands', component: Brands}
    ]
    
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    })

export default router