import { RouterConfig, provideRouter } from '@angular/router'
import { tempVarComponent } from '../components/template_variables/template_variables'

import { AppComponent } from '../components/app/app'
import { ArrComponent } from '../components/arrays/arrays'
import { parentChildComponent } from '../components/parentChild/parent'
parentComponent
import { parentComponent } from '../components/TreeComp/ParentComp'

import { bindPropComponent } from '../components/binding_properties/binding_properties'
import { EventComponent } from '../components/events/events'

export const routes: RouterConfig = [
    {
        path: 'template_variables',
        component: tempVarComponent
    },
    
    {
        path:'arrays',
        component:ArrComponent
    },
    
    {
        path:'bindProp',
        component:bindPropComponent
    },
     {
        path:'events',
        component:EventComponent
    },
    {
        path:'parentChild',
        component:parentChildComponent
    },
     {
        path:'TreeComp',
        component:parentComponent
    },
    {
        path:'',
        redirectTo:'/template_variables',terminal: true       
    },

];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
