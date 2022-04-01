<template>
	<transition name="fadeInBottom" appear>
		<div class="d-flex flex-column auth-container p-5">
			<h2 class="text-white text-center font-weight-bold">Welcome back!</h2>
			<div class="d-flex my-4">
				<b-button variant="outline-primary" class="px-5 py-2 mr-2" :class="{'bg-primary': action === 'login', 'text-white': action === 'login'}" @click="action = 'login'">Login</b-button>
				<b-button variant="outline-primary" class="py-2 px-5 m-0" :class="{'bg-primary': action === 'signup', 'text-white': action === 'signup'}" @click="action = 'signup'">Signup</b-button>
			</div>
			<div class="my-3 position-relative">
				<transition name="slideInLeft">
					<AuthLogin v-if="action === 'login'"/>
					<AuthSignup v-else />
				</transition>
			</div>
			<b-button variant="primary">{{ capitalizeWord(action) }}</b-button>
		</div>
	</transition>
</template>

<script>
import helpersMixin from '../../utils/helpersMixin';
export default {
	name: 'AuthForm',
	mixins: [helpersMixin],
	data () {
		return {
			action: 'login'
		}
	}
}
</script>

<style lang="sass" scoped>
@import '../../assets/scss/styles.scss'
.auth-container
	background: rgba(255, 255, 255, .05)
	box-shadow: 0px 0px 20px rgba($primary, .1)
	border-radius: 12px

.fadeInBottom-enter-active, .fadeInBottom-leave-active
	transition: all 2s ease-out

.fadeInBottom-enter, .fadeInBottom-leave-active
	transform: translateY(40px)
	opacity: 0
</style>
