<p>
	<img alt="LAYOUTS" src="./banner.png">
  <br>
  <a href="https://www.npmjs.com/package/svelte-layouts">
    <img src="https://img.shields.io/npm/v/svelte-layouts.svg?style=flat-square" alt="npm version">
  </a>
  <a href="https://github.com/ryu-man/layouts/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/svelte-layouts.svg?style=flat-square" alt="license">
  </a>
</p>

# Layouts

This project is an implementation of CSS Flexbox & Grid for [Svelte](https://svelte.dev/) framework for making it easier for the developer to create layouts and build apps faster 

## Install

```bash
// npm
npm install svelte-layouts

// yarn
yarn add svelte-layouts
```

## Get started

Layouts have four main components: Row, Col (Column) ,Grid and Item

**Row**: a layout with horizontal main-axis, place it items from left to right

**Col**: a layout with vertical main-axis, place it items from top to left

**Grid**: a multi-directional layout, where items can be positione vertically and horizontally

**Item**: a controllable layout item

## Examples

```html
<script>
    import { Row, Col, Grid, Item } from 'svelte-layouts'
</script>

// control how elements are positioned horizontally
<Row justifyContent="space-between">
  // Create div element, controled with style property
  <div></div>

  // Create an item
  <Item></Item>

  // Create a row item
  <Row></Row>

  // Create a Col item
  <Col></Col>

  // Create a grid item
  <Grid></Grid>
</Row>

<Col></Col>

// Define the number & width of rows and columns
<Grid templateRows="auto" templateCols="20vw 1fr"></Grid>
```

## Responsive Design

```html
<div class="container">
  <Row class="custom-class"></Row>
</div>
```

```css
@media (min-width: 1000px) {
/*
you can target .col , .row, .grid, .item, also you can add .layout class to prevent style collision 
or you can target a specific  class provided to the component via it class prop
.class :global(.class) syntax is recommended to prevent style leakage
*/
  .container :global(.row) { 
    /*make sure to use !important to override component's inline style*/
    background-color: black !important;
  }
}
```

## License

svelte-layouts is [MIT Licenced](./LICENSE)

## Learn More

if you want to learn more about css flexbox and grid and how they works, you can feel free to check out these useful links:

- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox vs Grid](https://dev.to/nadayousry/grid-vs-flexbox-3fbh)
  