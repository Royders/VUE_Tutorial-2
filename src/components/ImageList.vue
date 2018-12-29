<template>
<div>
     <div v-if= "isloggedIn" class="image-container">
         <img 
         v-for="image in allImages" 
         v-bind:src ="image.link"
         :key="image.id"/> 
    </div>
        <h2 v-else>Login to get started! </h2>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'ImageList',
    methods: {
        ...mapActions(['fetchImages'])
    },
     computed: {
        ...mapGetters(['allImages', 'isloggedIn'])
    },
    created(){
        this.fetchImages()
    }
}
</script>

<style scoped>
.image-container {
    column-count: 3;
    column-gap: 0
}
img{
    max-width: 100%;
    padding: 5px
}


</style>
