import vue from "vue"
import App from './App'
import store from './store'

new vue ({
    store,
    render : h => h(App)
}).$mount('#app')
