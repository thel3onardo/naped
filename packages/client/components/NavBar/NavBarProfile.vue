<template>
	<b-avatar
		class="user-avatar border border-primary cursor-pointer ml-3"
		src="https://i.pinimg.com/736x/03/4b/de/034bde783ea726b922100c86547831e8.jpg"
	/>
</template>

<script>
export default {
	name: 'NavBarProfile'
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/basics/_variables.scss';
.user-avatar {
	&:hover {
		box-shadow: 0px 0px 10px $primary
	}
}
</style>
