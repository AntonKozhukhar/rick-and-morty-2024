<template>
	<footer class="footer">
		<ul class="footer__list">
			<li class="footer__item">Characters: {{ charactersCount }}</li>
			<li class="footer__item">Episodes: {{ episodesCount }}</li>
			<li class="footer__item">Locations: {{ locationsCount }}</li>
		</ul>
	</footer>
</template>

<script>
import { mapState } from 'pinia';

import { useCharactersStore } from '@/store/charactersStore';
import { useEpisodesStore } from '@/store/episodesStore';
import { useLocationsStore } from '@/store/locationsStore';

export default {
	name: 'TheFooter',
	computed: {
		...mapState(useCharactersStore, ['charactersCount']),
		...mapState(useEpisodesStore, ['episodesCount']),
		...mapState(useLocationsStore, ['locationsCount'])
	}
};
</script>

<style lang="scss" scoped>
.footer {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px 16px;
	width: 100%;
	background-color: $bg-dark;
	color: $white;
	height: 60px;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 11;

	&__list {
		display: flex;
		gap: 16px;
	}
}
</style>
