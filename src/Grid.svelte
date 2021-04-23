<script>
  import { classNames, css, renameProps } from './utils'

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
  export let templateAreas
  export let templateCols
  export let templateRows

  export let alignSelf
  export let area
  export let col
  export let colEnd
  export let colStart
  export let justifySelf
  export let row
  export let rowEnd
  export let rowStart

  export let basis
  export let grow
  export let order
  export let shrink

  export let style = {}

  let _class = ''
  export { _class as class }
</script>

<div
  use:css="{renameProps({
    style,
    alignContent,
    alignItems,
    autoCols,
    autoRows,
    colGap,
    fluid,
    inline,
    justifyContent,
    reverse,
    rowGap,
    templateAreas,
    templateCols,
    templateRows,

    colStart,
    colEnd,
    rowStart,
    rowEnd,
    col,
    row,
    area,
    justifySelf,
    alignSelf,

    alignSelf,
    basis,
    grow,
    shrink,
    order
  })}"
  class="{classNames(_class, { inline, reverse, fluid }, 'grid', 'layout')}"
>
  <slot />
</div>

<style>
  div.grid {
    display: grid;
  }
  div.grid.inline {
    display: inline-grid;
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
