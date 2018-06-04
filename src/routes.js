import IndexRoute from './components/index.component';
import LocationRoute from './components/location.component';

export const routes = [

	{
		path: '/',
		component: IndexRoute
	},
	{
		path: '/locations',
		component: LocationRoute
	}
    
];
