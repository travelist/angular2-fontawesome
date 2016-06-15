var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
//
// FaStackComponent is not supported yet
//
var FaStackComponent = (function () {
    function FaStackComponent() {
        this.classList = ['fa-stack'];
    }
    FaStackComponent.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'size')
                var previousValue = changes[key].previousValue;
            var currentValue = changes[key].currentValue;
            if ([1, 2, 3, 4, 5].indexOf(currentValue) >= 0) {
                if (previousValue === 1) {
                    this.removeFaClass('fa-lg');
                }
                else {
                    this.removeFaClass("fa-" + previousValue + "x");
                }
                if (currentValue === 1) {
                    this.classList.push('fa-lg');
                }
                else {
                    this.classList.push("fa-" + currentValue + "x");
                }
            }
        }
    };
    FaStackComponent.prototype.addFaClass = function (className) {
        // better to check the uniquness
        this.classList.push(className);
    };
    FaStackComponent.prototype.removeFaClass = function (className) {
        var index;
        if ((index = this.classList.indexOf(className)) >= 0) {
            this.classList.splice(index, 1);
        }
    };
    __decorate([
        core_1.Input()
    ], FaStackComponent.prototype, "size");
    FaStackComponent = __decorate([
        core_1.Component({
            selector: 'fa-stack',
            template: '<i [ngClass]="classList"></i>'
        })
    ], FaStackComponent);
    return FaStackComponent;
})();
exports.FaStackComponent = FaStackComponent;
//# sourceMappingURL=fa-stack.component.js.map