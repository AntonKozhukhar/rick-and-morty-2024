<template>
	<div class="page">
		<TheNavigation :is-open="isNavOpen" />
		<div class="page__content">
			<TheHeader v-model="isNavOpen" />
			<main class="page__main">
				<RouterView #default="{ Component }">
					<Transition
						name="fade"
						mode="out-in"
					>
						<component :is="Component" />
					</Transition>
				</RouterView>
			</main>
			<TheFooter />
		</div>
	</div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
	name: 'MainLayout',
	components: {
		TheNavigation,
		TheHeader,
		TheFooter
	},
	data() {
		return {
			isNavOpen: false
		};
	}
};
</script>

<style lang="scss" scoped>
.page {
	display: flex;
	align-items: flex-start;
	height: 100%;

	&__content {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}

	&__main {
		flex: 1 1 auto;
	}
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
