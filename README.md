# Angular2 Fontawesome (Beta) [![Circle CI](https://circleci.com/gh/travelist/angular2-fontawesome.svg?style=svg&circle-token=b67cb26ecb809e7ba182ac4d2e222707a34ddddd)](https://circleci.com/gh/travelist/angular2-fontawesome)
Angular2 components for Fontawesome

Note: *Do Not Use in Production*.
Some behaviors would be modified in the future release.
This is because Angular2 is currently beta release, and it seems to be batter to wait for some features (like [this](https://github.com/angular/angular/issues/6710)) and best practices.

## Installation

In `package.json`, insert a following line in the `dependencies`:

```
"angular2-fontawesome": ">=0.3.0"
```

We can import this library with SystemJS (`systemjs.config.js`):
```javascript
// This example is following to Angular2 Quick Start Documentation
// Reference: https://angular.io/docs/ts/latest/quickstart.html

var map = {
  'app':                        'app',
  '@angular':                   'node_modules/@angular',
  'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
  'rxjs':                       'node_modules/rxjs'
  // Add this line (1)
  'angular2-fontawesome':       'node_modules/angular2-fontawesome/lib',
};

var packages = {
  'app':                        { main: 'main.js',  defaultExtension: 'js' },
  'rxjs':                       { defaultExtension: 'js' },
  'angular2-in-memory-web-api': { defaultExtension: 'js' },
  // Add this line (2)
  'angular2-fontawesome':       { defaultExtension: 'js' },
};

```

*Note: This might be modified to eliminate above configuration lines, and can be used by just `import .. from ..` statement in each module.*

## Usage

1. Add [Fontawesome]((http://fortawesome.github.io/Font-Awesome/get-started/)) to your application.

2. In the decorators, use `directives`  (Angular2 QuickStart for example):

```javascript
import { FaComponent } from 'angular2-fontawesome/components';

@Component({
  selector: 'my-app',
  template: '<fa [name]="\'rocket\'" [border]=true></fa>',
  directives: [FaComponent],
})
export class AppComponent {}
```

## Parameters

```html
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
```

### name

```html
<fa [name]="'rocket'"></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket"></i>
</fa>
<!-- or simply, -->
<fa name="rocket"></fa>
<!-- rendered -->
<fa name="rocker">
  <i class="fa fa-rocket"></i>
</fa>
```

### size

```html
<fa [name]="'rocket'" [size]=1></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-lg"></i>
</fa>
```

### flip

```html
<fa [name]="'rocket'" [flip]="'horizontal'"></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-flip-horizontal"></i>
</fa>
```

### pull

```html
<fa [name]="'rocket'" [pull]="'right'"></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-pull-right"></i>
</fa>
```

### rotate

```html
<fa [name]="'rocket'" [rotate]=90></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-rotate-90"></i>
</fa>
```

### border

```html
<fa [name]="'rocket'" [border]=true></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-border"></i>
</fa>
```

### spin

```html
<fa [name]="'rocket'" [span]=true></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-span"></i>
</fa>
```

### fw

```html
<fa [name]="'rocket'" [fw]=true></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-fw"></i>
</fa>
```

### inverse

```html
<fa [name]="'rocket'" [inverse]=true></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-inverse"></i>
</fa>
```

## TODO

- Remove `<fa>` from rendered results
  - Depends on [this issue](https://github.com/angular/angular/issues/6710)
- Support for `fa-stack`
- Support for `fa-li` and `fa-ul`
- Test codes
  - After the Angular2 guideline for test code is published

## License

(MIT License) - Copyright (c) 2016 Komei Shimamura
