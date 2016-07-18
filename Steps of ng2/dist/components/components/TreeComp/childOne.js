System.register(['@angular/core', './subChild'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, subChild_1;
    var childOneComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (subChild_1_1) {
                subChild_1 = subChild_1_1;
            }],
        execute: function() {
            childOneComponent = (function () {
                function childOneComponent() {
                }
                childOneComponent = __decorate([
                    core_1.Component({
                        selector: 'child-one',
                        templateUrl: 'components/TreeComp/childOne.html',
                        directives: [subChild_1.SubChildComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], childOneComponent);
                return childOneComponent;
            }());
            exports_1("childOneComponent", childOneComponent);
        }
    }
});
