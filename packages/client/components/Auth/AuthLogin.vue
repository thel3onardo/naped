<template>
	<b-row class="d-flex flex-column">
		<b-col cols="12">
			<b-form-group>
				<b-form-input placeholder="Email address" type="email" />
			</b-form-group>
			<b-form-group>
				<b-form-input placeholder="Password" type="password" />
			</b-form-group>
		</b-col>
		<b-col cols="12">
			<p class="text-white">Esqueceu a senha? <span class="text-primary">clique aqui</span></p>
		</b-col>
	</b-row>
</template>

<script>
export default {
	name: 'AuthLogin'
}
</script>
