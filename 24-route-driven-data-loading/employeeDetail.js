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
var router_1 = require('@angular/router');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/share');
var employeeLoader_1 = require('./employeeLoader');
var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent(route, loader) {
        this.route = route;
        this.loader = loader;
        console.log('EmployeeDetailComponent constructor');
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('EmployeeDetailComponent ngOnInit');
        this.employee$ = this.route.params
            .map(function (params) { return params['employeeId']; })
            .switchMap(function (id) { return _this.loader.getDetails(id); }).share();
    };
    EmployeeDetailComponent = __decorate([
        core_1.Component({
            selector: 'employee-detail',
            templateUrl: './employeeDetail.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, employeeLoader_1.EmployeeLoader])
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
})();
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=employeeDetail.js.map