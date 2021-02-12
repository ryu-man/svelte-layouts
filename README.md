# Layouts

This project is an implementation of css Flexbox & Grid using svelte, it make it easier to use component to structer your page

## Install

Coming soon

## Get started

Layouts have three main components: Row, Column and Grid you need to import it from 'layouts' and use it in the template section of a svelte component

## Row / Column

```html
<script>
    import { Row, Column } from 'layouts'
</script>

<Row></Row>

<Column></Column>
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

<Grid></Grid>
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

As You can use any HTML element in the content you can also use predefined items which let have more control over the element directly

```html
<script>
import { Row } from 'layouts'
</script>

<Row>
    // Create div element, can't controls directly
    // can't control directly
    <div></div>

    // Create a div item 'block'
    // use can use content props only
    <Row.item></Row.item>

    // Create a row item 'flex'
    // use can use Row props + content props
    <Row.row></Row.row>

    // Create a column item 'flex' direction 'column'
    // use can use Column props + content props
    <Row.column></Row.column>

    // Create a grid item 'grid'
    // use can use Grid props + content props
    <Row.grid></Row.grid>
</Row>
```

### Row/Column Content Props

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

    // Create a div item 'block'
    // use can use content props only
    <Grid.item></Grid.item>

    // Create a row item 'flex'
    // use can use Row props + content props
    <Grid.row></Grid.row>

    // Create a column item 'flex' direction 'column'
    // use can use Column props + content props
    <Grid.column></Grid.column>

    // Create a grid item 'grid'
    // use can use Grid props + content props
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
