<template>
	<b-form-group
		:label="label"
		@input="$emit('input', $e)"
	>
		<b-form-input
			:placeholder="placeholder"
			:inputmode="inputmode"
			:state="showValidation ? isValid : null"
			@blur="blurValidate"
			v-model="inputData"
			trim
		/>
		<b-form-invalid-feedback v-text="invalidationMessage" />
	</b-form-group>
</template>

<script>
export default {
	name: 'FormInput',
	props: {
		label: {
			type: String,
			required: false
		},
		placeholder: {
			type: String
		},
		inputmode: {
			type: String
		},
		invalidationMessage: {
			type: String
		},
		validationFunction: {
			type: Function,
			required: true,
		},
		blurValidation: {
			type: Boolean,
			default: true
		}
	},
	data () {
		return {
			inputData: null,
			showValidation: false,
		}
	},
	methods: {
		blurValidate() {
			if (!this.blurValidation) return;

			this.showValidation = true;
		}
	},
	computed: {
		isValid() {
			return this.validationFunction(this.inputData) ? null : false;
		}
	}
}
</script>

