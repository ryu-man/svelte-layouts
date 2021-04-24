<script>
  import { classNames, css, renameProps } from './utils'

  export let alignContent
  export let alignItems
  export let fluid
  export let gap
  export let inline
  export let justifyContent
  export let reverse
  export let style
  export let wrap

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

  let _class
  export { _class as class }
</script>

<div
  use:css="{renameProps({
    alignContent,
    alignItems,
    justifyContent,
    gap,
    wrap,
    reverse,
    inline,
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
  class="{classNames(_class, { reverse, inline, fluid }, 'col', 'layout')}"
>
  <slot />
</div>

<style>
  .layout {
    display: flex;
  }
  .col {
    flex-direction: column;
  }
  .reverse {
    flex-direction: column-reverse !important;
  }
  .inline {
    display: inline-flex !important;
  }
  .fluid.width {
    width: 100%;
  }
  .fluid.height {
    height: 100%;
  }
  .fluid.both {
    width: 100%;
    height: 100%;
  }
</style>
