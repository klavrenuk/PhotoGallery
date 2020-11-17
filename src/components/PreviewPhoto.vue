<template>
	<div class="preview_photo">
		<img :src="'./src/images/photo-1.jpg'"/>
	</div>
</template>

<script>
export default {
	name: 'PreviewPhoto'
}
</script>

<style lang="less">
.preview_photo {
	padding: 2rem 0;

	& img {
		width: 100%;
		height: 100%;
		margin-left: 1rem;
		object-fit: cover;
	}
}
</style>