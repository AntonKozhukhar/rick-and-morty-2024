export default [
	{
		path: '/',
		component: () => import('@/layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'HomePage',
				component: () => import('@/pages/HomePage.vue')
			},
			{
				path: 'characters',
				children: [
					{
						path: '',
						name: 'CharactersPage',
						component: () => import('@/pages/characters/CharactersPage.vue')
					},
					{
						path: ':id',
						name: 'SingleCharacterPage',
						component: () => import('@/pages/characters/SingleCharacterPage.vue')
					}
				]
			},
			{
				path: 'episodes',
				children: [
					{
						path: '',
						name: 'EpisodesPage',
						component: () => import('@/pages/episodes/EpisodesPage.vue')
					},
					{
						path: ':id',
						name: 'SingleEpisodePage',
						component: () => import('@/pages/episodes/SingleEpisodePage.vue')
					}
				]
			},
			{
				path: 'locations',
				children: [
					{
						path: '',
						name: 'LocationsPage',
						component: () => import('@/pages/locations/LocationsPage.vue')
					},
					{
						path: ':id',
						name: 'SingleLocationPage',
						component: () => import('@/pages/locations/SingleLocationPage.vue')
					}
				]
			}
		]
	},
	{
		path: '/auth',
		component: () => import('@/layouts/AuthLayout.vue'),
		children: [
			{
				path: 'login',
				name: 'LoginPage',
				component: () => import('@/pages/auth/LoginPage.vue')
			},
			{
				path: 'registration',
				name: 'RegistrationPage',
				component: () => import('@/pages/auth/RegistrationPage.vue')
			}
		]
	}
];
