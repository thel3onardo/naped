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
							<FormInput invalidationMessage="Please, insert a valid e-mail." type="email" placeholder="E-mail" inputmode="text" :validationFunction="emailValid" @input="form.email.value = $event" :disabled="isLoading" @validValue="form.email.isValid = true" @isInvalid="form.email.isValid = false" />
							<FormInput invalidationMessage="Please, insert a valid password" type="password" placeholder="Password" inputmode="text" :validationFunction="passwordValid" @input="form.password.value = $event" :disabled="isLoading" :key="2" @validValue="form.password.isValid = true" @isInvalid="form.email.isValid = false" />
						</div>
					</template>
					<template v-else>
						<div :key="2">
							<FormInput invalidationMessage="Please, insert a valid name." type="text" placeholder="Name" inputmode="text" :validationFunction="nameValid" @input="form.name.value = $event" :disabled="isLoading" @validValue="form.name.isValid = true" @isInvalid="form.email.isValid = false" />
							<FormInput invalidationMessage="Please, insert a valid e-mail." type="email" placeholder="E-mail" inputmode="text" :validationFunction="emailValid" @input="form.email.value = $event" :disabled="isLoading" :key="1" @validValue="form.email.isValid = true" @isInvalid="form.email.isValid = false" />
							<FormInput invalidationMessage="Please, insert a valid password" type="password" placeholder="Password" inputmode="text" :validationFunction="passwordValid" @input="form.password.value = $event" :disabled="isLoading" :key="2" @validValue="form.password.isValid = true" @isInvalid="form.email.isValid = false" />
						</div>
					</template>
				</transition-group>
			</div>
			<b-button @click="verifyFieldsValidation" variant="primary">
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
				email: { value: null, isValid: false },
				password: { value: null, isValid: false },
				name: { value: null, isValid: false },
			},
			isLoading: false,
		}
	},
	watch: {
		action () {
			this.form.email.value = null;
			this.form.password.value = null;
			this.form.name.value = null;
		}
	},
	methods: {
		verifyFieldsValidation() {
			const formArray = Object.values(this.form);
			if (this.action === 'signup') {
				if (formArray.every((el) => el.isValid === true)) {
					return this.signUp();
				}
			} else if (this.action === 'login') {
				if (formArray.slice(0, 2).every((el) => el.isValid === true)) {
					return this.login();
				}
			}
			return this.showValidations = true;
		},
		async signUp() {
			this.isLoading = true;
			const headers = {
				'Content-type': 'application/json'
			}
			const body = { email: this.form.email?.value, password: this.form.password?.value, name: this.form.name?.value };

			try {
				await this.$axios.post(`http://localhost:4000/signup`, body, headers);

				const loginRes = await this.$auth.loginWith('local', { data: body });
				if (loginRes.status === 200) {
					this.$router.push('/')
				}
			} catch (err) {
				this.isLoading = false;
				return console.error(err);
			}
		},
		async login() {
			try {
				const res = await this.$auth.loginWith('local', {
					data: {
						email: this.form.email?.value,
						password: this.form.password?.value
					}
				});
				console.log(res)
				if (res.status === 200) {
					this.$router.push('/')
				}
			} catch (err) {
				return console.error(err)
			}
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
