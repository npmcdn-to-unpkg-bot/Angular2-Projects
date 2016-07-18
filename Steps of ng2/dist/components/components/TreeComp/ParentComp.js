System.register(['@angular/core', './childOne', './childTwo'], function(exports_1, context_1) {
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
    var core_1, childOne_1, childTwo_1;
    var parentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (childOne_1_1) {
                childOne_1 = childOne_1_1;
            },
            function (childTwo_1_1) {
                childTwo_1 = childTwo_1_1;
            }],
        execute: function() {
            parentComponent = (function () {
                function parentComponent() {
                }
                parentComponent = __decorate([
                    core_1.Component({
                        selector: 'parent',
                        templateUrl: 'components/TreeComp/ParentComp.html',
                        directives: [childOne_1.childOneComponent, childTwo_1.childTwoComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], parentComponent);
                return parentComponent;
            }());
            exports_1("parentComponent", parentComponent);
        }
    }
});
