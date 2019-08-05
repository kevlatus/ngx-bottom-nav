<a target="_blank" href="https://www.npmjs.com/package/ngx-bottom-nav">![](https://img.shields.io/npm/v/ngx-bottom-nav.svg)</a>
![](https://img.shields.io/circleci/project/github/kevlatus/ngx-bottom-nav/master.svg)

# Angular Bottom Navigation

This library provides [Angular](https://angular.io/) components for implementing a 
 [Material Bottom Navigation](https://material.io/design/components/bottom-navigation.html).
 It relies on the [Angular Material Library](https://material.angular.io/) and
 integrates with [Angular's router](https://angular.io/guide/router).

## Installing

Before installing, make sure to add Angular Material to your project. When using Angular CLI, you can run:
```
ng add @angular/material
```
For alternative installation refer to the [quick start guide](https://material.angular.io/guide/getting-started).  

Using npm, you can install the library with:  
```
npm install --save ngx-bottom-nav
```

### Enabling Material theming 

If you want to benefit from Material theming, you need to use Angular Material
 with [a custom theme](https://material.angular.io/guide/theming#defining-a-custom-theme).
 Then, you can add theming to the nav bar layout like this:
 
```scss
@import '~@angular/material/theming';
@import '~ngx-bottom-nav/theming'; // <-- include SASS lib file

@include mat-core();

$primary: mat-palette($mat-indigo);
$accent: mat-palette($mat-pink, A200, A100, A400);
$warn: mat-palette($mat-red);
$theme: mat-light-theme($primary, $accent, $warn);

@include angular-material-theme($theme);
@include ngx-bottom-nav-theme($theme); // <-- include the bottom nav theme
``` 

## Usage

**1. Import the BottomNavModule**

```javascript
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BottomNavModule} from 'ngx-bottom-nav';

@NgModule({
    imports: [
        BrowserModule,
        BottomNavModule // <-- import module
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

**2. Use the BottomNavComponent**

```html
<ngx-bottom-nav [items]="items"></ngx-bottom-nav>
```
app.component.html

```typescript
import {Component} from '@angular/core';
import {BottomNavItem} from 'ngx-bottom-nav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: BottomNavItem[] = [
    {icon: 'home', label: 'Home', routerLink: ''},
    {icon: 'search', label: 'Search', routerLink: 'search'},
    {icon: 'forum', label: 'Forum', routerLink: 'forum'},
  ];
}
```
app.component.ts
