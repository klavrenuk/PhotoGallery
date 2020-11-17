<template>
	<div class="preview"
	     :class="isShow ? 'show' : ''"
	>
		<b-row class="preview-components">
			<b-col cols="12" md="8">
				<PreviewPhoto/>
			</b-col>
			<b-col cols="12" md="4">
				<PreviewInfo/>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import PreviewPhoto from './PreviewPhoto.vue'
import PreviewInfo from './PreviewInfo.vue'

export default {
	name: 'Preview',

	components: {PreviewInfo, PreviewPhoto},

	data() {
		return {
			isShow: false
		}
	},

	methods: {
		showPreview() {
			this.$root.showShadowBlock('show');
			this.isShow = true;
		}
	}
}
</script>

<style lang="less">
.preview {
	position: fixed;
	top: 1rem;
	left: 0;
	right: 0;
	width: calc(100% - 2rem);
	height: calc(100% - 2rem);
	margin: 0 auto;
	border-radius: 6px;
	overflow: hidden;
	z-index: 2;
	display: none;
	background: #333333;

	&.show {
		display: block;
	}

	& .preview-components {
		align-items: center;
		justify-content: center;
	}
}
</style>