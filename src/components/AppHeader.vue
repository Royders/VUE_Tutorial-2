<template>
<div class="ui secondary pointing menu">!
    <a class="active item" href="/">
      Memes are fun
    </a>
    <div class = "right menu">
         <a href="#" class="ui item" @click="login">
             Login
         </a>
    </div>

</div>
</template>

<script>
// macActions connects different actions to an actual component instance (like AppHeader)
import { mapActions } from 'vuex'

export default {
    name: 'AppHeader',
    methods: {
        ...mapActions(['login'])
    } 
}
</script>


<style>

</style>


