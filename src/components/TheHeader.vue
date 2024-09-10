<template>
	<header class="header">
		<button
			type="button"
			class="header__burger"
			@click="isNavOpen = !isNavOpen"
		>
			<MenuIcon />
		</button>
		<h2 class="header__title">
			<img
				src="@/assets/images/rick.png"
				alt="Rick"
				title="Rick"
				class="header__image"
			/>
			The Rick and Morty App
			<img
				src="@/assets/images/morty.png"
				alt="Morty"
				title="Morty"
				class="header__image"
			/>
		</h2>
		<div class="header__user"></div>
	</header>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue';

export default {
	name: 'TheHeader',
	components: {
		MenuIcon
	},
	props: {
		modelValue: {
			type: Boolean,
			required: true
		}
	},
	emits: ['update:modelValue'],
	computed: {
		isNavOpen: {
			get() {
				return this.modelValue;
			},
			set(value) {
				this.$emit('update:modelValue', value);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: $bg-light;
	padding: 8px 16px;
	width: 100%;
	box-shadow:
		0 2px 4px -1px hsla(0, 0%, 0%, 0.2),
		0 4px 5px 0 hsla(0, 0%, 0%, 0.14),
		0 1px 10px 0 hsla(0, 0%, 0%, 0.12);
	// .header__burger
	&__burger {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		transition: $time;

		@include hover {
			background-color: $light-grey;
		}
	}
	// .header__title
	&__title {
		font-size: font-rem(20);
		display: flex;
		align-items: center;
		gap: 8px;
	}
	// .header__image
	&__image {
		width: 48px;
		height: 48px;
	}
	// .header__user
	&__user {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background-color: $light-grey;
	}
}
</style>
