import Vue from 'vue'
import Router from 'vue-router'
//import Inicio from './components/Inicio'
//import SobreMi from './components/SobreMi'
//import Contacto from './components/Contacto'
//import Post from './components/Post'
//import Articulo from './components/Articulo'
import NotFound from './components/NotFound'
Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: ()=>import("./components/Inicio")
        },
        {
            path: '/sobremi',
            name: 'sobremi',
            alias:["/acerca"],
            component: ()=>import("./components/SobreMi")
        },
        {
            path: '/contacto',
            name: 'contacto',
            alias:["/contactame"],
            component: ()=>import("./components/Contacto")
        },
        {
            path: '/post',
            name: 'post',
            component: ()=>import("./components/Post"),
        
            children: [
                {
                    path: ':articulo',
                    component: ()=>import("./components/Articulo"),
                }
            ]
        },{
            path: "/administrador",
            name: "administrador",
            component: ()=>import("./components/Administrador"),
            children:[
                {
                    path: "/*simple",
                    name: "administrador-simple",
                    component: ()=>import("./components/AdministradorSimple.vue")
                },
                {
                    path:"/*avanzado",
                    name:"administrador-avanzado",
                    component: ()=>import("./components/AdministradorAvanzado.vue")
                },
            ]
        },
        {
            path: "/home",
             redirect: "/"
},
        {
            path: "/inicio",
            redirect: "/"
        },
        {
            path:"/portada",
            redirect: "/"
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})