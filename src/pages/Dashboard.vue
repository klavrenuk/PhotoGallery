<template>
    <div class="dashboard">
        <Navigation />
        <Slider />
        <Gallery />
    </div>
</template>

<script>
    import Gallery from './../components/Gallery.vue'
    import Navigation from './../components/Navigation.vue'
    import Slider from './../components/Slider.vue'

    export default {
        name: "Dashboard",

        components: {
            Gallery,
            Navigation,
            Slider
        }
    }
</script>

<style scoped>

</style>