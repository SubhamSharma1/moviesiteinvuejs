import {createRouter, createWebHistory} from 'vue-router'

// .... below line is withour laze loadinng... that is all pages are loaded
// import Home from "../views/Home.vue";
// import About from "../views/About.vue";


// .... below pages are using lazy loading.... only the needed page is loaded.
const Home =()=>import("../views/Home.vue");
const Blog=()=>import("../views/Blog.vue");
const routes = [
    {
        path:"/",
        component:Home,
        name: 'home',
    },
    {
        path:"/blogs",
        component:Blog,
        name:'blog'
    }

]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router