# marsh-grid

Very Simple Responsive Pinterest Like Masonry Layout. This version requires the presence of angular.js and underscore.js


## Installation


1. git clone https://github.com/marsh73/marsh-angular-grid.git
2. Include `marsh-grid` in your HTML.

    ```html
    <script src="marsh.grid.js"></script>
    ```

3. Inject the `marsh.grid` module in your application.

    ```js
    angular.module('your.module', [
        'marsh.grid'
    ]);
    ```

## Usage

The Directive was built to display a simple event board to post events with and without images:

    <marsh-grid></marsh-grid>


This Does not calculate height on items, but rather counts on a point system based on the presence of an image src or not.

The grid is responsive using a switch statement for amount of rows based on window width.

The template was pulled inside the directive for modularity's sake. You can separate this and change the template: to a templateUrl: 'path_to_template.html'

add some filters and have some fun.

I'll update soon based on height.

