<template>
	<div class="d-flex flex-column bg-transparent auth-container p-5">
		<h2 class="text-white text-center mb-4">Welcome back!</h2>
		<div class="d-flex">
			<b-button variant="primary px-5 py-2 mr-2">Login</b-button>
			<b-button variant="outline-primary py-2 px-5 m-0">Signup</b-button>
		</div>
		<div class="my-4">
			<AuthLogin />
		</div>
		<b-button variant="primary">Register</b-button>
	</div>
</template>

<script>
export default {
	name: 'AuthForm'
}
</script>

<style lang="sass" scoped>
@import '../../assets/scss/styles.scss'
.auth-container
	border: 1px solid $primary
	border-radius: 16px
</style>
