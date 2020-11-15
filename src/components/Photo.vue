<template>
    <figure role="group"
            :ariaLabelledby="'photo-' + photo.id"
            class="photo"
    >
            <a title="Show photo"
                @click="onOpenPreview(photo)"
            >
                <img :src="'./src/images/photo-' + photo.name + '.jpg'"
                    :alt="'Image ' + photo.title"
                />
            </a>
            <figcaption :id="'photo-' + photo.id"
                    class="photo-title"
                >{{ photo.titile }}
            </figcaption>
    </figure>
</template>

<script>
    export default {
        name: 'Photo',

        props: [
            'photo',
            'onOpenPreview'
        ]
    }
</script>

<style lang="less">
    .photo {
        position: relative;
        width: 272px;
        height: 160px;
        margin: 0 0 1rem 0;

        & a {
            width: 100%;
            height: 100%;
            display: inline-block;
        }

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