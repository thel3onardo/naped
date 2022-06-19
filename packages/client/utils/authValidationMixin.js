const authValidationMixin = {
	methods: {
		emailValid (value) {
			return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value));
		},
		passwordValid (value) {
			return (value?.length > 3);
		},
		nameValid (value) {
			return (value?.length > 3)
		}
	}
}

export default authValidationMixin;
