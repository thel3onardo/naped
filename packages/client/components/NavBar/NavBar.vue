<template>
  <div class="w-100 d-flex align-items-center justify-content-center py-5" style="z-index: 30">
    <div class="h-100 d-flex align-items-center position-absolute" style="left: 0">
      <Nuxt-link to="/" class="text-decoration-none">
        <h4 class="text-primary m-0">
          Naped
        </h4>
      </Nuxt-link>
    </div>
	<ul class="d-flex align-items-center m-0 nav-bar__menu">
	<li v-for="item in navItems" :key="item.label" class="mx-4">
		<Nuxt-link :to="item.route" class="font-weight-normal">
		{{ item.label }}
		</Nuxt-link>
	</li>
	</ul>
	<div class="ml-5 position-absolute" style="right: 0">
		<Nuxt-link to="/forum">
			<b-button variant="outline-primary" class="text-white rounded-full font-titles forum__font-size ml-3 px-4 py-2">
				Fórum
			</b-button>
		</Nuxt-link>
		<NavBarProfile />
	</div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
	  return {
		  navItems: [
			  { route: '/', label: 'Home' },
			  { route: '/series', label: 'Séries' },
			  { route: '/movies', label: 'Filmes' },
			  { route: '/animes', label: 'Animes' },
			  { route: '/games', label: 'Games' },
		  ]
	  }
  }
}
</script>
<style lang="scss" scoped>
.forum__font-size {
	font-size: 0.85rem;
}
</style>
