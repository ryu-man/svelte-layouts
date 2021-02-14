<script>
  import { classNames } from '../utils'
  import Grid from './grid.svelte'

  export let alignSelf
  export let area
  export let col
  export let colEnd
  export let colStart
  export let justifySelf
  export let row
  export let rowEnd
  export let rowStart

  export let alignContent
  export let alignItems
  export let autoCols
  export let autoRows
  export let colGap
  export let fluid
  export let inline
  export let justifyContent
  export let reverse
  export let rowGap
  export let style = {}
  export let templateAreas
  export let templateCols
  export let templateRows

  let _class
  export { _class as class }
</script>

<Grid
  class="{classNames(_class, 'grid-item')}"
  style="{{
    ...style,
    gridColumnStart: colStart,
    gridColumnEnd: colEnd,
    gridRowStart: rowStart,
    gridRowEnd: rowEnd,
    gridColumn: col,
    gridRow: row,
    gridArea: area,
    justifySelf,
    alignSelf
  }}"
  alignContent="{alignContent}"
  alignItems="{alignItems}"
  autoCols="{autoCols}"
  autoRows="{autoRows}"
  colGap="{colGap}"
  fluid="{fluid}"
  inline="{inline}"
  justifyContent="{justifyContent}"
  reverse="{reverse}"
  rowGap="{rowGap}"
  templateAreas="{templateAreas}"
  templateCols="{templateCols}"
  templateRows="{templateRows}"
>
  <slot />
</Grid>
