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
  use:css="{{
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
  class="{classNames(_class, 'grid-item')}"
>
  <slot />
</div>
