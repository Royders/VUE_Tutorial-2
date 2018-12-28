# meme-saver

### Setup

CSS Styling: https://semantic-ui.com/

API: https://api.imgur.com/

### Vuex

- state:      raw data of the modules
- getters:    functions (filter, computations) to return a subset of the state
- mutations:  single step ways to operate on the state
- actions:    functions to combine mutations

#### Vuex Store

```
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        
    }

})
```
Vuex.Store is a collection of different modules

```
import vue from "vue"
import App from './App'
import store from './store'
```
Connect the store to the vue instance in the main.js file
```
new vue ({
    store,
    render : h => h(App)
}).$mount('#app')
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
