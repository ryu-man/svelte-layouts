<p>
	<img alt="LAYOUTS" src="./banner.png">
    <br>
  <!-- <a href="https://www.npmjs.com/package/svelte"> -->
    <!-- <img src="https://img.shields.io/npm/v/svelte.svg" alt="npm version"> -->
  <!-- </a> -->
  <a href="https://github.com/ryu-man/layouts/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/svelte.svg" alt="license">
  </a>
</p>

# Layouts

This project is an implementation of css Flexbox & Grid for [svelte](https://svelte.dev/) framework

## Install

```bash
// npm
npm install svelte-layouts

// yarn
yarn add svelte-layouts
```

## Get started

Layouts have three main components: Row, Col (Column) and Grid.

_Note: svelte-layouts support type definitions_

## Row / Col

```html
<script>
    import { Row, Col } from 'svelte-layouts'
</script>

// control how elements are positioned horizontally
<Row justifyContent="space-between"></Row>

<Col></Col>
```

| Prop           | Type    |
| -------------- | ------- |
| justifyContent | string  |
| alignItems     | string  |
| alignContent   | string  |
| wrap           | string  |
| inline         | boolean |
| reverse        | boolean |
| alignSelf      | string  |
| gap            | string  |
| fluid          | string  |

## Grid

```html
<script>
    import { Grid } from 'layouts'
</script>

// Define the number & width of rows and columns
<Grid templateRows="auto" templateCols="20vw 1fr"></Grid>
```

| Prop           | Type    |
| -------------- | ------- |
| templateCols   | string  |
| templateRows   | string  |
| templateAreas  | string  |
| colGap         | string  |
| rowGap         | string  |
| autoCols       | string  |
| autoRows       | string  |
| justifyContent | string  |
| alignItems     | string  |
| alignContent   | string  |
| alignSelf      | string  |
| wrap           | string  |
| inline         | boolean |
| reverse        | boolean |
| fluid          | string  |

## Content

As You can use any HTML element in the content you can also use predefined items which let you have more control over the element directly

```html
<script>
import { Row } from 'layouts'
</script>

<Row>
    // Create div element
    // can't control directly
    <div></div>

    // Create a div item
    // you can use content props only
    <Row.item></Row.item>

    // Create a row item
    // you can use Row props + content props
    <Row.row></Row.row>

    // Create a Col item
    // you can use Column props + content props
    <Row.col></Row.col>

    // Create a grid item
    // you can use Grid props + content props
    <Row.grid></Row.grid>
</Row>
```

### Row/Col Content Props

| Prop      | Type   |
| --------- | ------ |
| order     | string |
| grow      | string |
| shrink    | string |
| basis     | string |
| alignSelf | string |

```html
<script>
    import { Grid } from 'layouts'
</script>

<Grid>
    // Create div element, can't controls directly
    // can't control directly
    <div></div>

    // Create a div item
    // you can use content props only
    <Grid.item></Grid.item>

    // Create a row item 
    // you can use Row props + content props
    <Grid.row></Grid.row>

    // Create a column item
    // you can use Column props + content props
    <Grid.col></Grid.col>

    // Create a grid item 
    // you can use Grid props + content props
    <Grid.grid></Grid.grid>
</Grid>
```

## Grid Content Props

| Prop        | Type    |
| ----------- | ------- |
| justifySelf | string  |
| alignSelf   | string  |
| colStart    | string  |
| colEnd      | boolean |
| rowStart    | boolean |
| rowEnd      | string  |
| col         | string  |
| row         | string  |
| area        | string  |
| gap         | string  |
| fluid       | string  |

## License

svelte-layouts is [MIT Licenced](./LICENSE)

## Learn More

if you want to learn more about css flexbox and grid and how they works, you can feel free to check out these useful links:

- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
  