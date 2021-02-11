<script context="module">
  export function init(
    node,
    {
      colStart,
      colEnd,
      rowStart,
      rowEnd,
      col,
      row,
      area,
      justifySelf,
      alignSelf
    }
  ) {
    const style = node.style
    colStart && (style.gridColumnStart = colStart)
    colEnd && (style.gridColumnEnd = colEnd)
    rowStart && (style.gridRowStart = rowStart)
    rowEnd && (style.gridRowEnd = rowEnd)
    col && (style.gridColumn = col)
    row && (style.gridRow = row)
    area && (style.gridColumnStart = area)
    justifySelf && (style.justifySelf = justifySelf)
    alignSelf && (style.alignSelf = alignSelf)
  }
</script>

<script>
  import { classNames, css } from '../utils'

  export let alignSelf
  export let area
  export let col
  export let colEnd
  export let colStart
  export let justifySelf
  export let row
  export let rowEnd
  export let rowStart
  export let style

  let _class
  export { _class as class }
</script>

<div
  use:css="{style}"
  use:init="{{
    colStart,
    colEnd,
    rowStart,
    rowEnd,
    col,
    row,
    area,
    justifySelf,
    alignSelf
  }}"
  class="{classNames(_class, 'grid-item')}"
>
  <slot />
</div>
