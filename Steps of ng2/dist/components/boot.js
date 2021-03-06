System.register(['@angular/platform-browser-dynamic', './components/app/app', './routes/routes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_1, routes_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (routes_1_1) {
                routes_1 = routes_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [
                routes_1.APP_ROUTER_PROVIDERS
            ]).catch(function (err) { return console.log(err); });
        }
    }
});
