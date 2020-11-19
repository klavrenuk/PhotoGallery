<template>
	<div class="preview_info">
		<div v-if="isLoading">
			<div class="preview_info-loading">
				<Loading />
			</div>
		</div>
		<div v-else>
			<div>
				<b-row>
					<b-col cols="10">
						<h4 class="preview_info-title">Title</h4>
					</b-col>

					<b-col cols="2"
					       class="text-right"
					>
						<button class="btn btn-icon"
						        @click="onClose"
						>
							<b-icon icon="x"
							        font-scale="1.5"
							></b-icon>
						</button>
					</b-col>
				</b-row>
			</div>

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
	</div>
</template>

<script>
import Loading from './Loading.vue'

export default {
	name: 'PreviewInfo',

	components: {Loading},

	data() {
		return {
			isLoading: false,
			photo: {}
		}
	},

	methods: {
		onClose() {
			alert('on close');
		},

		async loadInfo(id) {
			console.log('load info', id);

			await this.getPhotoInfo(id);
		},

		getPhotoInfo() {
			const _this = this;

			_this.isLoading = true;
			return new Promise((resolve => {

				setTimeout(function() {
					_this.isLoading = false;
				}, 1000);
			}))
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

.preview_info-loading {
	height: 90vh;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>