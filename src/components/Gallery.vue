<template>
    <section class="gallery">

        <div v-if="isLoading">
            <Loading />
        </div>
        <div v-else>
            <b-row>
                <b-col cols="12"
                        md="6"
                        lg="4"
                        v-for="photo in photos"
                        :key="photo.id"
                >
                    <Photo 
                        :photo="photo"
                        :onOpenPreview="onOpenPreview"
                    />
                </b-col>
            </b-row>
        </div>

        <Preview ref="Preview" />
    </section>
</template>

<script>
    import Photo from './Photo.vue'
    import Loading from './Loading.vue'
    import Preview from './Preview.vue'

    export default {
        name: 'Gallery',

        components: {Photo, Loading, Preview},

        data() {
            return {
                photos: [],
                isLoading: true
            }
        },

        methods: {
            getPhotos() {
                this.isLoading = true;
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
                this.isLoading = false;
            },

            onOpenPreview(photo) {
                this.$refs.Preview.showPreview(photo.id);
            }
        },

        mounted() {
            this.getPhotos();
        }
    }
</script>

<style lang="less">
    .gallery {
        padding: 2rem 1rem;
        box-sizing: border-box;
        background: rgba(204,204,204, .5);
    }
</style>