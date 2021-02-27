<script>
  import { classNames, css } from '../utils'
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
  export let style = {}

  let _class = ''
  export { _class as class }

  console.log(style)
</script>

<div
  use:css="{{
    ...style,
    alignContent,
    alignItems,
    autoCols,
    autoRows,
    gridColumnGap: colGap,
    fluid,
    inline,
    justifyContent,
    reverse,
    gridRowGap: rowGap,
    gridTemplateAreas: templateAreas,
    gridTemplateColumns: templateCols,
    gridTemplateRows: templateRows
  }}"
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
