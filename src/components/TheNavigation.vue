<template>
	<aside
		:class="[{ 'nav--open': isOpen }]"
		class="nav"
	>
		<nav>
			<ul class="nav__list">
				<li
					v-for="(link, i) in navigation"
					:key="i"
				>
					<RouterLink
						:to="link.route"
						:exact-active-class="link.exact && 'nav__link--active'"
						active-class="nav__link--active"
						class="nav__link"
					>
						<component
							:is="link.icon"
							class="nav__icon"
						/>
						{{ link.name }}
					</RouterLink>
				</li>
			</ul>
		</nav>
	</aside>
</template>

<script>
import HomeIcon from 'vue-material-design-icons/HomeOutline.vue';
import CharactersIcon from 'vue-material-design-icons/AccountGroupOutline.vue';
import EpisodesIcon from 'vue-material-design-icons/Television.vue';
import LocationsIcon from 'vue-material-design-icons/MapMarkerMultipleOutline.vue';

export default {
	name: 'TheNavigation',
	components: {
		HomeIcon,
		CharactersIcon,
		EpisodesIcon,
		LocationsIcon
	},
	props: {
		isOpen: {
			type: Boolean,
			required: true
		}
	},
	data() {
		return {
			navigation: [
				{
					name: 'Home',
					route: { name: 'HomePage' },
					icon: 'HomeIcon',
					exact: true
				},
				{
					name: 'Characters',
					route: { name: 'CharactersPage' },
					icon: 'CharactersIcon'
				},
				{
					name: 'Episodes',
					route: { name: 'EpisodesPage' },
					icon: 'EpisodesIcon'
				},
				{
					name: 'Locations',
					route: { name: 'LocationsPage' },
					icon: 'LocationsIcon'
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.nav {
	position: sticky;
	top: 0;
	left: 0;
	flex: 0 0 64px;
	height: 100vh;
	padding: 8px;
	border-right: 1px solid $light-grey;
	transition: $time;
	overflow: hidden;

	&--open {
		flex: 0 0 200px;
	}

	&__link {
		display: flex;
		align-items: center;
		gap: 20px;
		padding: 10px;
		transition: $time;
		border-radius: 3px;
		@include hover {
			background-color: $light-grey;
			color: $orange;
		}

		&--active {
			background-color: $light-grey;
			color: $orange;
		}
	}

	&__icon {
		min-width: 26px;
		min-height: 26px;
		width: 26px;
		height: 26px;
	}
}
</style>
