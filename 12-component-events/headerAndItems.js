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
var OrderHeader = (function () {
    function OrderHeader() {
    }
    __decorate([
        core_1.Input('customerName'), 
        __metadata('design:type', String)
    ], OrderHeader.prototype, "customer");
    OrderHeader = __decorate([
        core_1.Component({
            selector: 'order-header',
            template: "\n  <div class=\"card\">\n    <span class=\"component-marker\">OrderHeader</span>\n    <div class=\"card-content\">\n      <div class=\"card-title\">{{customer}}</div>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], OrderHeader);
    return OrderHeader;
})();
exports.OrderHeader = OrderHeader;
var OrderItems = (function () {
    function OrderItems() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], OrderItems.prototype, "items");
    OrderItems = __decorate([
        core_1.Component({
            selector: 'order-items',
            template: "\n  <div class=\"card\">\n    <span class=\"component-marker\">OrderItems</span>\n    <div class=\"card-content\">\n      <div class=\"card-title\">Order Items</div>\n      <ul class=\"collection\">\n        <li class=\"collection-item\" *ngFor=\"let item of items\">{{item.quantity}}:\n        {{item.description}}</li>\n      </ul>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], OrderItems);
    return OrderItems;
})();
exports.OrderItems = OrderItems;
//# sourceMappingURL=headerAndItems.js.map