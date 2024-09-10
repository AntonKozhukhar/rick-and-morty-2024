import { defineStore } from 'pinia';
import axios from '@/axios';

export const useCharactersStore = defineStore('charactersStore', {
	state: () => ({
		characters: [],
		charactersCount: localStorage.getItem('charactersCount') || 0,
		selectedCharacter: {}
	}),
	actions: {
		async getCharacters() {
			try {
				const { data } = await axios.get('character');
				this.characters = data.results;
				this.charactersCount = data.info.count;
				localStorage.setItem('charactersCount', this.charactersCount);
			} catch (error) {
				console.error(error);
			}
		},
		async getRandomCharacters(count) {
			try {
				const { data } = await axios.get(`character/${this.generateRandomIds(count)}`);
				this.characters = data;
			} catch (error) {
				console.error(error);
			}
		},
		async getCharacterById(id) {
			try {
				const { data } = await axios.get(`character/${id}`);
				this.selectedCharacter = data;
			} catch (error) {
				console.error(error);
			}
		},
		generateRandomIds(count) {
			const numbers = [];
			while (numbers.length < count) {
				const randomNumber = Math.floor(Math.random() * this.charactersCount);
				if (!numbers.includes(randomNumber)) {
					numbers.push(randomNumber);
				}
			}
			return numbers.join(',');
		}
	}
});
