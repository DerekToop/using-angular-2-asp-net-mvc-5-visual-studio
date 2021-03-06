"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path ="../typings/globals/jquery/index.d.ts"/> 
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.h2content = $('.navbar-brand').html();
        this.hahastr = 'haha string';
        this.title = 'ASP.NET MVC 5 with Angular 2';
        this.skills = ['MVC 5', this.h2content + ' (jquery get)', this.hahastr, 'haha', 'Angular 2', 'TypeScript', 'Visual Studio 2015'];
        this.myskills = this.skills[0];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "    \n    <h2>My favorite skill is: {{myskills}}</h2>\n    <p>Skill:</p>\n    <ul>\n      <li *ngFor=\"let skl of skills\">\n        {{ skl }}\n      </li>\n    </ul>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map