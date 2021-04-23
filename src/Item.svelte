<script>
  import { classNames, css, renameProps } from './utils'

  export let alignSelf
  export let basis
  export let grow
  export let order
  export let shrink

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
  use:css="{renameProps({
    alignSelf,
    basis,
    grow,
    shrink,
    order,
    colStart,
    colEnd,
    rowStart,
    rowEnd,
    col,
    row,
    area,
    justifySelf,
    alignSelf,
    style
  })}"
  class="{classNames(_class, 'item', 'layout')}"
>
  <slot />
</div>
