import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/store/authStore';

const routes = [
	{
		path: '/',
		component: () => import('@/layouts/MainLayout.vue'),
		meta: {
			requiresAuth: true
		},
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
		redirect: { name: 'LoginPage' },
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
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFoundPage',
		component: () => import('@/pages/NotFoundPage.vue')
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

router.beforeEach(to => {
	const authStore = useAuthStore();
	// якщо користувач не залогінений і сторінка вимагає авторизацію - перенаправляємо на сторінку авторизації
	if (!authStore.isLoggedIn && to.meta.requiresAuth) {
		return { name: 'LoginPage' };
	}
	// якщо користувач залогінений і сторінка не вимагає авторизацію - перенаправляємо на головну сторінку
	else if (authStore.isLoggedIn && !to.meta.requiresAuth) {
		return { name: 'HomePage' };
	}
});

export default router;
