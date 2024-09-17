<template>
	<div class="auth">
		<h1 class="auth__title">{{ title }}</h1>
		<div class="auth__content">
			<RouterView />
		</div>
	</div>
</template>

<script>
export default {
	name: 'AuthLayout',
	computed: {
		title() {
			return this.$route.path.includes('login') ? 'Log in' : 'Register';
		}
	}
};
</script>

<style lang="scss" scoped>
.auth {
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 24px;
	font-size: font-rem(24);

	&__title {
		font-size: font-rem(40);
		font-weight: 700;
	}

	&__content {
		width: 100%;
		max-width: 500px;
		padding: 32px;
		background-color: $light-grey;
		border-radius: 8px;
	}
}
</style>
