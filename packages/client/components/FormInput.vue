<template>
	<b-form-group
		:label="label"
	>
		<b-form-input
			:placeholder="placeholder"
			:inputmode="inputmode"
			:type="type"
			:state="showValidation ? isValid ? null : false : null"
			:disabled="disabled"
			@blur="blurValidate"
			@input="$emit('input', inputData)"
			v-model="inputData"
			trim
			v-bind="$attrs"
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
		type: {
			type: String,
		},
		disabled: {
			type: Boolean,
			default: false,
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
			return this.validationFunction(this.inputData)
		}
	},
	watch: {
		isValid(newValue) {
			if (newValue) this.$emit('validValue', this.inputData);
			else this.$emit('isInvalid');
		}
	}
}
</script>

