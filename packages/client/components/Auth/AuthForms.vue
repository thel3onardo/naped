<template>
	<transition name="fadeInBottom" appear>
		<div class="d-flex flex-column auth-container p-5">
			<h2 class="text-white text-center font-weight-bold">Welcome back!</h2>
			<div class="d-flex my-4">
				<b-button variant="outline-primary" class="px-5 py-2 mr-2" :class="{'bg-primary': action === 'login', 'text-white': action === 'login'}" @click="action = 'login'" :disabled="isLoading">Login</b-button>
				<b-button variant="outline-primary" class="py-2 px-5 m-0" :class="{'bg-primary': action === 'signup', 'text-white': action === 'signup'}" @click="action = 'signup'" :disabled="isLoading">Signup</b-button>
			</div>
			<div class="my-3 position-relative">
				<transition-group name="slideInLeft">
					<template v-if="action === 'login'">
						<div :key="1">
							<FormInput invalidationMessage="Please, insert a valid e-mail." type="email" placeholder="E-mail" inputmode="text" :validationFunction="emailValid" v-model="form.email" :disabled="isLoading" />
							<FormInput invalidationMessage="Please, insert a valid password" type="password" placeholder="Password" inputmode="text" :validationFunction="passwordValid" v-model="form.password" :disabled="isLoading" :key="2" />
						</div>
					</template>
					<template v-else>
						<div :key="2">
							<FormInput invalidationMessage="Please, insert a valid name." type="text" placeholder="Name" inputmode="text" :validationFunction="nameValid" v-model="form.name" :disabled="isLoading" />
							<FormInput invalidationMessage="Please, insert a valid e-mail." type="email" placeholder="E-mail" inputmode="text" :validationFunction="emailValid" v-model="form.email" :disabled="isLoading" :key="1" />
							<FormInput invalidationMessage="Please, insert a valid password" type="password" placeholder="Password" inputmode="text" :validationFunction="passwordValid" v-model="form.password" :disabled="isLoading" :key="2" />
						</div>
					</template>
				</transition-group>
			</div>
			<b-button @click="sendData" variant="primary">
				<template v-if="isLoading">
					<b-spinner variant="light" small />
				</template>
				<template v-else>
					{{ capitalizeWord(action) }}
				</template>
			</b-button>
		</div>
	</transition>
</template>

<script>
import helpersMixin from '../../utils/helpersMixin';
import authValidationMixin from '../../utils/authValidationMixin';
export default {
	name: 'AuthForm',
	mixins: [helpersMixin, authValidationMixin],
	data () {
		return {
			action: 'login',
			form: {
				email: null,
				password: null,
				name: null,
			},
			isLoading: false,
		}
	},
	watch: {
		action () {
			this.form.email = null;
			this.form.password = null;
			this.form.name = null;
		}
	},
	methods: {
		sendData() {
			this.isLoading = true;
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
