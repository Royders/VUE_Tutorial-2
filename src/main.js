import vue from "vue"
import App from './App'
import VueRouter from 'vue-router'
import store from './store'
import AuthHandler from './components/AuthHandler'
import ImageList from './components/ImageList'
import UploadForm from './components/UploadForm'

vue.use(VueRouter)

export const router = new VueRouter({
    // browser router mode
    mode: 'history',
    routes: [
        { path: '/oauth2/callback', component: AuthHandler },
        { path: '/', component: ImageList },
        { path: '/upload', component: UploadForm }
    ]
})

new vue ({
    router,
    store,
    render : h => h(App)
}).$mount('#app')
