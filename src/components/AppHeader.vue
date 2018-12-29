<template>
<div class="ui secondary pointing menu">!
    <router-link class="active item" to="/">
      Memes are fun
    </router-link>
    <div class = "right menu">
        <div v-if=isloggedIn class="horizontal">
            <router-link to="/" class="item">Galleries</router-link>
             <router-link to= "/upload" class="item">Upload</router-link>
              <a class="item" @click="logout">Logout</a>
        </div>
         <a v-else href="#" class="ui item" @click="login">
             Login
         </a>
    </div>
</div>
</template>

<script>
// macActions connects different actions to an actual component instance (like AppHeader)
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'AppHeader',
    methods: {
        ...mapActions(['login', 'logout'])
    },
    computed: {
         ...mapGetters(['isloggedIn'])
    }
}
</script>


<style scoped>
.horizontal{
   display: flex;
   flex-direction: row

}


</style>


