<template>
    <section class="gallery">
       <Photo v-for="photo in photos"
            :key="photo.id"
            :photo="photo"
       >
       </Photo>
    </section>
</template>

<script>
    import Photo from './Photo.vue'

    export default {
        name: 'Gallery',

        components: {Photo},

        data() {
            return {
                photos: []
            }
        },

        methods: {
            getPhotos() {
                this.photos = [
                    {
                        name: '1',
                        title: 'New Zealand#1',
                        id: 1
                    },
                    {
                        name: '2',
                        title: 'New Zealand#2',
                        id: 2
                    },
                    {
                        name: '3',
                        title: 'New Zealand#3',
                        id: 3
                    },
                    {
                        name: '4',
                        title: 'New Zealand#4',
                        id: 4
                    },
                    {
                        name: '5',
                        title: 'New Zealand#5',
                        id: 5
                    },
                    {
                        name: '6',
                        title: 'New Zealand#6',
                        id: 6
                    }
                ]
            }
        },

        mounted() {
            this.getPhotos();
        }
    }
</script>