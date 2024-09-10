<template>
	<div class="character">
		<div class="character__image">
			<img
				:src="character.image"
				:alt="character.name"
				:title="character.name"
			/>
		</div>

		<div class="character__content">
			<RouterLink
				:to="{ name: 'SingleCharacterPage', params: { id: character.id } }"
				class="character__name"
			>
				{{ character.name }}
			</RouterLink>
			<div class="character__status">
				<span
					:class="`character__color--${characterStatusColor}`"
					class="character__color"
				></span>
				{{ character.status }} - {{ character.species }}
			</div>

			<div class="character__info">
				<span>Last known location:</span>
				<RouterLink
					v-if="character.location.url"
					:to="{ name: 'SingleLocationPage', params: { id: lastKnownLocationId } }"
					class="character__link"
				>
					{{ character.location.name }}
				</RouterLink>
				<span
					v-else
					class="character__location"
				>
					{{ character.location.name }}
				</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CharacterCard',
	props: {
		character: {
			type: Object,
			required: true
		}
	},
	computed: {
		lastKnownLocationId() {
			return this.character.location.url.split('/').at(-1);
		},
		characterStatusColor() {
			switch (this.character.status) {
				case 'Alive':
					return 'green';
				case 'Dead':
					return 'red';
				default:
					return 'grey';
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.character {
	display: flex;
	gap: 8px;
	border-radius: 8px;
	overflow: hidden;
	border: 1px solid $light-grey;
	background-color: $bg-card;
	color: $white;
	// .character__image
	&__image {
		min-width: 200px;
		max-width: 200px;
		height: 200px;
		img {
			min-width: 100%;
			min-height: 100%;
			object-fit: cover;
		}
	}
	// .character__content
	&__content {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 16px;
		height: 100%;
	}
	// .character__name
	&__name {
		font-size: font-rem(22);
		transition: $time;

		@include hover {
			color: $orange;
		}
	}
	// .character__status
	&__status {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	// .character__color
	&__color {
		display: block;
		min-width: 10px;
		min-height: 10px;
		border-radius: 50%;
		&--green {
			background-color: $green;
		}
		&--red {
			background-color: $red;
		}
		&--grey {
			background-color: $grey;
		}
	}
	// .character__info
	&__info {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	// .character__location
	&__location {
		transition: $time;
		@include hover {
			color: $orange;
		}
	}
}
</style>
