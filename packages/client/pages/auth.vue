<template>
	<b-row class="min-vh-100 px-0 m-0 bg-dark">
		<b-col cols="5" class="px-0 position-relative auth-bg">
			<b-img src="images/auth/bg4.jpg" style="object-fit: cover; max-width: 100%; height: 100%"></b-img>
		</b-col>
		<b-col cols="7" class="px-0 d-flex align-items-center justify-content-center">
			<AuthForm />
		</b-col>
	</b-row>
</template>

<script>
export default {
	name: 'Auth',
	layout: 'empty'
}
</script>

<style lang="sass" scoped>
@import '../assets/scss/styles.scss'
.auth-bg
	box-shadow: 0px 0px 30px rgba($primary, .3)

	&:before
		content: ""
		position: absolute
		width: 100%
		height: 100%
		background-color: rgba($primary, .5)

	img
		opacity: .5
</style>
