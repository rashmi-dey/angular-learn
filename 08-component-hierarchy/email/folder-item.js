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
var FolderItemComponent = (function () {
    function FolderItemComponent() {
    }
    FolderItemComponent = __decorate([
        core_1.Component({
            selector: 'folder-item',
            templateUrl: 'email/folder-item.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FolderItemComponent);
    return FolderItemComponent;
})();
exports.FolderItemComponent = FolderItemComponent;
//# sourceMappingURL=folder-item.js.map