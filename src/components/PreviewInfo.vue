<template>
	<div class="preview_info">
		<h4 class="preview_info-title">
			<b-row>
				<b-col cols="10">
					Title
				</b-col>
				<b-col cols="2">
					<button class="btn btn-icon"
					        @click="onClose"
					>
						<b-icon icon="x"
						        font-scale="1.5"
						></b-icon>
					</button>
				</b-col>
			</b-row>
		</h4>

		<p class="preview_info-description">Quisque vulputate suscipit lectus, ac vulputate purus sollicitudin et. Aenean
			vulputate tellus eu ipsum suscipit rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
			per inceptos himenaeos. In interdum placerat efficitur. Mauris elit augue, ultrices a velit sed, scelerisque
			malesuada velit.</p>

		<ul class="preview_info-comments">
			<li>ultrices a velit sed, scelerisque malesuada velit</li>
			<li>ultrices a velit sed, scelerisque malesuada velit</li>
			<li>ultrices a velit sed, scelerisque malesuada velit</li>
			<li>ultrices a velit sed, scelerisque malesuada velit</li>
			<li>ultrices a velit sed, scelerisque malesuada velit</li>
			<li>ultrices a velit sed, scelerisque malesuada velit</li>

			<li class="item_style_none">
				<b-textarea rows="4"
				            cols="100"
				            class="preview_info-text_area"
				/>
				<button class="btn btn-link preview_info-add">Добавить</button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'PreviewInfo',

	methods: {
		onClose() {
			alert('on close');
		}
	}
}
</script>

<style lang="less">
.preview_info {
	padding: 1rem 1rem 3rem;
	height: 100vh;
	overflow-y: auto;
	background: #fff;
}

.preview_info-title {
	font-weight: 900;
}

.preview_info-comments {
	color: #999999;

	& li {
		margin-bottom: 1rem;

		&:last-child {
			margin-bottom: 0;
		}
	}
}

.preview_info-text_area {
	margin: 3rem 0 .5rem;
}

.preview_info-add {
	float: right;
}
</style>