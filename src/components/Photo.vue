<template>
    <figure role="group"
            :ariaLabelledby="'photo-' + photo.id"
            class="photo"
    >
            <a>
                <img :src="'./src/images/photo-' + photo.name + '.jpg'"
                    :alt="'Image ' + photo.title"
                />
            </a>
            <figcaption :id="'photo-' + photo.id"
                    class="photo-title"
                >{{ photo.titile }}</figcaption>
       </figure>
</template>

<script>
    export default {
        name: 'Photo',

        props: [
            'photo'
        ]
    }
</script>

<style lang="less">
    .photo {
        position: relative;
        width: 272px;
        height: 160px;

        & img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }

        & .photo-title {
            color: #656565;
        }
    }
</style>