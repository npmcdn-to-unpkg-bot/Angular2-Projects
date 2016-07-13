import { RouterConfig, provideRouter } from '@angular/router'
import { AppComponent } from '../components/home/home'
import { aboutComponent } from '../components/about/about'

export const routes: RouterConfig = [
    {
        path: 'home',
        component: AppComponent
    },
    
    {
        path:'about',
        component:aboutComponent
    },
    {
        path:'',
        redirectTo:'/home',
        terminal:true
    },

];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
