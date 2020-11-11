<template>
    <figure role="group"
            :ariaLabelledby="'photo-' + photo.id"
    >
           <img :src="'./src/images/photo-' + photo.name + '.jpg'"
            :alt="'Image ' + photo.title"
            />
            <figcaption :id="'photo-' + photo.id">{{ photo.titile }}</figcaption>
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