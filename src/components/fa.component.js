var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var FaComponent = (function () {
    function FaComponent(el) {
        // TODO (travelist): Support for fa-li selector
        // if (el.nativeElement.tagName == 'FA')
        // else this.classList = ['fa', 'fa-li']
        this.classList = ['fa'];
    }
    FaComponent.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            var previousValue = changes[key].previousValue;
            var currentValue = changes[key].currentValue;
            switch (key) {
                case 'name':
                    this.removeFaClass("fa-" + previousValue);
                    this.addFaClass("fa-" + currentValue);
                    break;
                case 'alt':
                    // TODO(travelist): Write code for the alt parameter
                    break;
                case 'size':
                    if (FaComponent.sizeValidator.test(currentValue)) {
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
                    break;
                case 'stack':
                    if (FaComponent.sizeValidator.test(currentValue)) {
                        this.removeFaClass("fa-stack-" + previousValue + "x");
                        this.addFaClass("fa-stack-" + currentValue + "x");
                    }
                    break;
                case 'flip':
                    if (FaComponent.flipValidator.test(currentValue)) {
                        this.removeFaClass("fa-flip-" + previousValue);
                        this.addFaClass("fa-flip-" + currentValue);
                    }
                    break;
                case 'pull':
                    if (FaComponent.pullValidator.test(currentValue)) {
                        this.removeFaClass("fa-pull-" + previousValue);
                        this.addFaClass("fa-pull-" + currentValue);
                    }
                    break;
                case 'rotate':
                    if (FaComponent.rotateValidator.test(currentValue)) {
                        this.removeFaClass("fa-rotate-" + previousValue);
                        this.addFaClass("fa-rotate-" + currentValue);
                    }
                    break;
                case 'border':
                    if (currentValue) {
                        this.addFaClass('fa-border');
                    }
                    else {
                        this.removeFaClass('fa-border');
                    }
                    break;
                case 'spin':
                    if (currentValue) {
                        this.addFaClass('fa-spin');
                    }
                    else {
                        this.removeFaClass('fa-spin');
                    }
                    break;
                case 'fw':
                    if (currentValue) {
                        this.addFaClass('fa-fw');
                    }
                    else {
                        this.removeFaClass('fa-fw');
                    }
                    break;
                case 'inverse':
                    if (currentValue) {
                        this.addFaClass('fa-inverse');
                    }
                    else {
                        this.removeFaClass('fa-inverse');
                    }
                    break;
            }
        }
    };
    FaComponent.prototype.addFaClass = function (className) {
        // better to check the uniquness
        this.classList.push(className);
    };
    FaComponent.prototype.removeFaClass = function (className) {
        var index;
        if ((index = this.classList.indexOf(className)) >= 0) {
            this.classList.splice(index, 1);
        }
    };
    FaComponent.sizeValidator = /[1-5]/;
    FaComponent.flipValidator = /['horizontal'|'vertical']/;
    FaComponent.pullValidator = /['right'|'left']/;
    FaComponent.rotateValidator = /[90|180|270]/;
    __decorate([
        core_1.Input()
    ], FaComponent.prototype, "name");
    __decorate([
        // fa-'name'
        core_1.Input()
    ], FaComponent.prototype, "alt");
    __decorate([
        // Currently not supported yet
        core_1.Input()
    ], FaComponent.prototype, "size");
    __decorate([
        // [1-5] fa-[lg|2-5]x
        core_1.Input()
    ], FaComponent.prototype, "stack");
    __decorate([
        // [1-5] fa-stack-[lg|2-5]x
        core_1.Input()
    ], FaComponent.prototype, "flip");
    __decorate([
        // [horizontal|vertical] fa-flip-[horizontal|vertical]
        core_1.Input()
    ], FaComponent.prototype, "pull");
    __decorate([
        // [right|left] fa-pull-[right|left]
        core_1.Input()
    ], FaComponent.prototype, "rotate");
    __decorate([
        // [90|180|270] fa-rotate-[90|180|270]
        core_1.Input()
    ], FaComponent.prototype, "border");
    __decorate([
        // true fa-border
        core_1.Input()
    ], FaComponent.prototype, "spin");
    __decorate([
        // true fa-spin
        core_1.Input()
    ], FaComponent.prototype, "fw");
    __decorate([
        // true fa-fw
        core_1.Input()
    ], FaComponent.prototype, "inverse");
    FaComponent = __decorate([
        core_1.Component({
            selector: 'fa',
            template: '<i [ngClass]="classList"></i>'
        })
    ], FaComponent);
    return FaComponent;
})();
exports.FaComponent = FaComponent;
//# sourceMappingURL=fa.component.js.map