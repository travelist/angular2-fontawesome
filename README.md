# Angular2 Fontawesome [![Circle CI](https://circleci.com/gh/travelist/angular2-fontawesome.svg?style=svg&circle-token=b67cb26ecb809e7ba182ac4d2e222707a34ddddd)](https://circleci.com/gh/travelist/angular2-fontawesome)
Angular2 components for Fontawesome

## Installation

```
"font-awesome": "~4.7.0"  # Use any versions
"angular2-fontawesome": "~0.9.0"
```

### [Angular2 QuickStart](https://angular.io/docs/ts/latest/quickstart.html)

In `package.json`, insert following lines in the `dependencies` block:

We can import this library using SystemJS (`systemjs.config.js`):

```javascript
// This example is following to Angular2 Quick Start Documentation

(function (global) {
  System.config({
    paths: {
      'npm:': 'node_modules/'
    },
    map: {
      app: 'app',

      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',

      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',

      // Add this line (1/2)
      'angular2-fontawesome': 'node_modules/angular2-fontawesome',
    },
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      },

      // Add this line (2/2)
      'angular2-fontawesome': { defaultExtension: 'js' }
    }
  });
})(this);

```

### [Angular CLI](https://github.com/angular/angular-cli)

1. `../node_modules/font-awesome/css/font-awesome.css` to **style** block of *angular-cli.json*.
2. `../node_modules/font-awesome/fonts/*.+(otf|eot|svg|ttf|woff|woff2)` to **addons** block of *angular-cli.json*.

```json
/* angular-cli.json  */
{
  "apps": [
    {
      "styles": [
        "../node_modules/font-awesome/css/font-awesome.css"
      ]
    }
  ],
  "addons": [
    "../node_modules/font-awesome/fonts/*.+(otf|eot|svg|ttf|woff|woff2)"
  ]
}
```

**NOTE**: If you don't have *angular-cli.json*, your configuration would be something like bellow:

```javascript
// src/system-config.ts

const map: any = {
  // Add this line (1/2)
  'angular2-fontawesome': 'vendor/angular2-fontawesome'
};

/** User packages configuration. */
const packages: any = {
  // Add these lines (2/2)
  'angular2-fontawesome':{
    defaultExtension: 'js'
  }
};
```

```javascript
// angular-cli-build.js

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      ...
      // Add following lines (1/2)
      'angular2-fontawesome/*.+(js|js.map)',
      'angular2-fontawesome/**/*.+(js|js.map)',
      'angular2-fontawesome/**/**/*.+(js|js.map)',

      // You need to add following lines as well (2/2)
      'font-awesome/css/*.*',
      'font-awesome/fonts/*.*'
    ]
  }
}
```

## Usage

```javascript
// app/app.module.ts

// (1/2)
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

@NgModule({
  imports: [ BrowserModule, Angular2FontawesomeModule ], // (2/2)
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

We can also use `FaDirective` if we want.

```javascript

let sampleTemplate = `
<fa [name]="rocket" [border]=true></fa>
<i fa [name]="rocket" [border]=true></i>
`

@Component({
  selector: 'my-app',
  template: sampleTemplate
})
export class AppComponent {}
```

## Parameters

```html
<!-- Component -->
<fa [name]=string      // name of fontawesome icon
    [size]=number      // [1-5]
    [flip]=string      // [horizontal|vertical]
    [pull]=string      // [right|left]
    [rotate]=number    // [90|180|270]
    [border]=boolean   // [true|false]
    [spin]=boolean     // [true|false]
    [fw]=boolean       // [true|false]
    [inverse]=boolean  // [true|false]
    ></fa>

<!-- Directive -->
<i fa [name]=string      // name of fontawesome icon
      [size]=number      // [1-5]
      [flip]=string      // [horizontal|vertical]
      [pull]=string      // [right|left]
      [rotate]=number    // [90|180|270]
      [border]=boolean   // [true|false]
      [spin]=boolean     // [true|false]
      [fw]=boolean       // [true|false]
      [inverse]=boolean  // [true|false]
      ></fa>
```

### name

```html
<fa [name]="'rocket'"></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket"></i>
</fa>

<i fa [name]="rocket"></i>
<!-- rendered -->
<i fa class="fa fa-rocket"></i>
```

### size

```html
<fa [name]="'rocket'" [size]=1></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-lg"></i>
</fa>

<i fa [name]="rocket" [size]=1></i>
<!-- rendered -->
<i fa class="fa fa-rocket fa-lg"></i>
```

### flip

```html
<fa [name]="'rocket'" [flip]="'horizontal'"></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-flip-horizontal"></i>
</fa>

<i fa [name]="rocket" [flip]="'horizontal'"></i>
<!-- rendered -->
<i fa class="fa fa-rocket fa-flip-horizontal"></i>
```

### pull

```html
<fa [name]="'rocket'" [pull]="'right'"></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-pull-right"></i>
</fa>

<i fa [name]="rocket" [pull]="'right'"></i>
<!-- rendered -->
<i class="fa fa-rocket fa-pull-right"></i>
```

### rotate

```html
<fa [name]="'rocket'" [rotate]=90></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-rotate-90"></i>
</fa>

<i fa [name]="'rocket'" [rotate]=90></i>
<!-- rendered -->
<i class="fa fa-rocket fa-rotate-90"></i>
```

### border

```html
<fa [name]="'rocket'" [border]=true></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-border"></i>
</fa>

<i fa [name]="'rocket'" [border]=true></i>
<!-- rendered -->
<i fa class="fa fa-rocket fa-border"></i>
```

### spin

```html
<fa [name]="'rocket'" [span]=true></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-span"></i>
</fa>

<i fa [name]="'rocket'" [span]=true></i>
<!-- rendered -->
<i class="fa fa-rocket fa-span"></i>
```

### fw

```html
<fa [name]="'rocket'" [fw]=true></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-fw"></i>
</fa>

<i fa [name]="'rocket'" [fw]=true></i>
<!-- rendered -->
<i class="fa fa-rocket fa-fw"></i>
```

### inverse

```html
<fa [name]="'rocket'" [inverse]=true></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-inverse"></i>
</fa>

<i fa [name]="'rocket'" [inverse]=true></i>
<!-- rendered -->
<i class="fa fa-rocket fa-inverse"></i>
```

## TODO

- [ ] Support for `fa-stack`
- [ ] Support for `fa-li` and `fa-ul`
- [ ] **FaStackDirective**
- [ ] Test codes
  - After the Angular2 guideline for test code is published

## License

(MIT License) - Copyright (c) 2016 Komei Shimamura
