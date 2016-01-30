System.register(["angular2/platform/browser", "angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1;
    var NewTask, showTable, MainTodo;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NewTask = (function () {
                function NewTask(User, task) {
                    this.User = User;
                    this.Taskname = task;
                }
                return NewTask;
            })();
            showTable = (function () {
                function showTable() {
                }
                showTable = __decorate([
                    core_1.Component({
                        selector: 'tr',
                        host: {
                            class: 'td'
                        },
                        inputs: ['todo'],
                        template: "\n\t<td>{{ todo.User }}</td>\n\t<td>{{ todo.Taskname }}</td>\n\t\t\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], showTable);
                return showTable;
            })();
            MainTodo = (function () {
                function MainTodo() {
                    this.todos = [];
                }
                MainTodo.prototype.addTodo = function (user, todo) {
                    console.log("Adding Name: " + user.value + " and Todo: " + todo.value);
                    var obj = new NewTask(user.value, todo.value);
                    console.log(obj);
                    this.todos.push(obj);
                    console.log(this.todos);
                    user.value = "";
                    todo.value = "";
                };
                MainTodo = __decorate([
                    core_1.Component({
                        selector: 'main-Component',
                        host: {
                            class: 'myClass'
                        },
                        directives: [showTable],
                        templateUrl: 'todo.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainTodo);
                return MainTodo;
            })();
            browser_1.bootstrap(MainTodo);
        }
    }
});
//# sourceMappingURL=app.js.map