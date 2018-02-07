# Angular5 Fontawesome [![Circle CI](https://circleci.com/gh/travelist/angular2-fontawesome.svg?style=svg&circle-token=b67cb26ecb809e7ba182ac4d2e222707a34ddddd)](https://circleci.com/gh/travelist/angular2-fontawesome)
Angular5 components for Fontawesome

## Installation

```shell
npm install --save font-awesome angular2-fontawesome
```

```
/* package.json */
"font-awesome": "~4.7.0"  # Use any versions
"angular2-fontawesome": "~5.2.0"
```

### Angular CLI

In `package.json`, insert following lines in the `dependencies` block:

We can import this library using SystemJS (`systemjs.config.js`):

```javascript
// .angular-cli.json
{
  "apps": [

    // ...

    "styles": [
      // Add this line
      "../../node_modules/font-awesome/css/font-awesome.css"
    ]
    // ..
  ]
}
```

## Usage

```javascript
// src/app/app.module.ts

// ....

// Add this import statement
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

// ....


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule  // Add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
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

<i fa [name]="'rocket'"></i>
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

<i fa [name]="'rocket'" [size]=1></i>
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

<i fa [name]="'rocket'" [flip]="'horizontal'"></i>
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

<i fa [name]="'rocket'" [pull]="'right'"></i>
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

## To Develop This Library

```shell
npm install typings --global
```

```shell
typings install
```

```shell
npm link
```

```shell
# /example
npm install font-awesome 
npm link angular2-fontawesome
```

Now your change under `/src` directory will be reflected.

```
npm unlink
```

## TODO

- [ ] Support for `fa-stack`
- [ ] Support for `fa-li` and `fa-ul`
- [ ] **FaStackDirective**
- [ ] Test codes
  - After the Angular2 guideline for test code is published

## License

(MIT License) - Copyright (c) 2018 Komei Shimamura
