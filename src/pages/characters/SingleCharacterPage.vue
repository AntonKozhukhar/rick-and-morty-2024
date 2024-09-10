<template>
	<pre>{{ selectedCharacter }}</pre>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useCharactersStore } from '@/store/charactersStore';

export default {
	name: 'SingleCharacterPage',
	computed: {
		...mapState(useCharactersStore, ['selectedCharacter'])
	},
	watch: {
		'$route.params.id': {
			async handler() {
				await this.getCharacterById(this.$route.params.id);
			},
			immediate: true
		}
	},
	methods: {
		...mapActions(useCharactersStore, ['getCharacterById'])
	}
};
</script>

<style lang="scss" scoped></style>
