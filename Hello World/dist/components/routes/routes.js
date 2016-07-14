System.register(['@angular/router', '../components/template_variables/template_variables', '../components/arrays/arrays', '../components/parentChild/parent', '../components/TreeComp/ParentComp', '../components/binding_properties/binding_properties', '../components/events/events'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, template_variables_1, arrays_1, parent_1, ParentComp_1, binding_properties_1, events_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (template_variables_1_1) {
                template_variables_1 = template_variables_1_1;
            },
            function (arrays_1_1) {
                arrays_1 = arrays_1_1;
            },
            function (parent_1_1) {
                parent_1 = parent_1_1;
            },
            function (ParentComp_1_1) {
                ParentComp_1 = ParentComp_1_1;
            },
            function (binding_properties_1_1) {
                binding_properties_1 = binding_properties_1_1;
            },
            function (events_1_1) {
                events_1 = events_1_1;
            }],
        execute: function() {
            ParentComp_1.parentComponent;
            exports_1("routes", routes = [
                {
                    path: 'template_variables',
                    component: template_variables_1.tempVarComponent
                },
                {
                    path: 'arrays',
                    component: arrays_1.ArrComponent
                },
                {
                    path: 'bindProp',
                    component: binding_properties_1.bindPropComponent
                },
                {
                    path: 'events',
                    component: events_1.EventComponent
                },
                {
                    path: 'parentChild',
                    component: parent_1.parentChildComponent
                },
                {
                    path: 'TreeComp',
                    component: ParentComp_1.parentComponent
                },
                {
                    path: '',
                    redirectTo: '/template_variables', terminal: true
                },
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
