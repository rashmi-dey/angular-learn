var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PeopleComponent = (function () {
    function PeopleComponent() {
    }
    PeopleComponent.prototype.ngOnInit = function () {
    };
    PeopleComponent = __decorate([
        core_1.Component({
            selector: 'app-people',
            templateUrl: './people.component.html',
            styleUrls: ['./people.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], PeopleComponent);
    return PeopleComponent;
})();
exports.PeopleComponent = PeopleComponent;
//# sourceMappingURL=people.component.js.map