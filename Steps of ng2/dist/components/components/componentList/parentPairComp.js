System.register(['@angular/core', './childPairComp', './pairClass'], function(exports_1, context_1) {
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
    var core_1, childPairComp_1, pairClass_1;
    var ParentPairCompo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (childPairComp_1_1) {
                childPairComp_1 = childPairComp_1_1;
            },
            function (pairClass_1_1) {
                pairClass_1 = pairClass_1_1;
            }],
        execute: function() {
            ParentPairCompo = (function () {
                function ParentPairCompo() {
                    this.pairs = [
                        new pairClass_1.pairClass("saad", 12),
                        new pairClass_1.pairClass("MuZz", 15)
                    ];
                }
                ParentPairCompo = __decorate([
                    core_1.Component({
                        selector: 'parent-pair',
                        template: "\n            <h2>Parent Component List</h2>\n            <child-pair *ngFor=\"let pair of pairs\" [nameValue]=\"pair\"></child-pair>  \n    ",
                        directives: [childPairComp_1.childPairComp]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ParentPairCompo);
                return ParentPairCompo;
            }());
            exports_1("ParentPairCompo", ParentPairCompo);
        }
    }
});
