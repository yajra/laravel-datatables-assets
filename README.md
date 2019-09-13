# WIP: Laravel DataTables Assets

A collection of DataTables server-side scripts.

## Installation

`yarn add https://github.com/yajra/laravel-datatables-assets`


```js
require('laravel-datatables-assets/js/dataTables.server-side.buttons');
```

## Laravel Integration

```php
use Yajra\DataTables\Html\Button;

Button::make('create')->editor('editor'),
Button::make('edit')->editor('editor'),
Button::make('remove')->editor('editor'),
Button::make('duplicate'),
Button::make('export'),
Button::make('print'),
Button::make('reset'),
Button::make('reload'),
```