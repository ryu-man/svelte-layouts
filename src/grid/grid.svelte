<script context="module">
  export function init(
    node,
    {
      alignContent,
      alignItems,
      autoCols,
      autoRows,
      colGap,
      justifyContent,
      rowGap,
      templateAreas,
      templateCols,
      templateRows
    }
  ) {
    const style = node.style
    justifyContent && (style.justifyContent = justifyContent)
    alignItems && (style.alignItems = alignItems)
    alignContent && (style.alignContent = alignContent)
    templateRows && (style.gridTemplateRows = templateRows)
    templateCols && (style.gridTemplateColumns = templateCols)
    templateAreas && (style.gridTemplateAreas = templateAreas)
    rowGap && (style.gridRowGap = rowGap)
    colGap && (style.columnGap = colGap)
    autoRows && (style.gridAutoRows = autoRows)
    autoCols && (style.gridAutoColumns = autoCols)

    return {
      destroy() {}
    }
  }
</script>

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
  export let style
  export let templateAreas
  export let templateCols
  export let templateRows
  export let onMount = () => {}

  let _class = ''
  export { _class as class }
</script>

<div
  use:css="{style}"
  use:init="{{
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
    templateRows
  }}"
  use:onMount
  class="{classNames(_class, { inline, reverse, fluid }, 'grid')}"
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
