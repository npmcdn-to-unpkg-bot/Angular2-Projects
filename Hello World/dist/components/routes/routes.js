System.register(['@angular/router', '../components/home/home', '../components/about/about'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_1, about_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                {
                    path: 'home',
                    component: home_1.AppComponent
                },
                {
                    path: 'about',
                    component: about_1.aboutComponent
                },
                {
                    path: '',
                    redirectTo: '/home',
                    terminal: true
                },
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
