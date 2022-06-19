const helpersMixin = {
	methods: {
		capitalizeWord: function(word) {
			return word[0].toUpperCase() + word.slice(1);
		}
	}
}

export default helpersMixin;
