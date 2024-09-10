import { defineStore } from 'pinia';
import axios from '@/axios';

export const useLocationsStore = defineStore('locationsStore', {
	state: () => ({
		locations: [],
		locationsCount: localStorage.getItem('locationsCount') || 0,
		selectedLocation: {}
	}),
	actions: {
		async getLocations() {
			try {
				const { data } = await axios.get('location');
				this.locations = data.results;
				this.locationsCount = data.info.count;
				localStorage.setItem('locationsCount', this.locationsCount);
			} catch (error) {
				console.error(error);
			}
		},
		async getLocationById(id) {
			try {
				const { data } = await axios.get(`location/${id}`);
				this.selectedLocation = data;
			} catch (error) {
				console.error(error);
			}
		}
	}
});
