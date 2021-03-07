<template>
  <footer class="footer">
		<b-row>
			<b-col cols="6"
			       class="text-center"
			>
				<a href="/admin"
				   class="footer-link"
				>Admin</a>
			</b-col>
			<b-col cols="6"
			       class="text-center"
			>
				<a href="/contact"
				   class="footer-link"
				>Contact us</a>
			</b-col>
		</b-row>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="less">
	.footer {
		padding: 2rem 3rem;
		color: #fff;
		background: #34495e;

		& .footer-link {
			border: none;
			border-bottom: 2px solid transparent;
			color: #fff;
			font-size: 20px;

			&:hover,
			&:active,
			&:focus {
				border-color: #fff;
			}
		}
	}
</style>