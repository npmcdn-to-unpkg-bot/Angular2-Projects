System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var pairClass;
    return {
        setters:[],
        execute: function() {
            pairClass = (function () {
                function pairClass(name, value) {
                    this.name = name;
                    this.value = value;
                }
                return pairClass;
            }());
            exports_1("pairClass", pairClass);
        }
    }
});
