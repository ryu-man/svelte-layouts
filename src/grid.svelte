<script lang="ts">
  import { register } from './utils/events'
  import { css } from './utils/css'

  export let templateRows: string
  export let templateColumns: string
  export let templateAreas: string
  export let columnGap: string
  export let rowGap: string
  export let autoColumns: string
  export let autoRows: string
  export let inline: boolean = false
  export let reverse: boolean = false
  export let wrap: string
  export let justifyContent: string
  export let alignItems: string
  export let alignContent: string
  export let order: number
  export let grow: number
  export let shrink: number
  export let basis: string
  export let alignSelf: string
  export let fluid: string
  export let style = {}
  export let on = {}
  let _class: string = ''
  export { _class as class }

  function init(node: HTMLElement) {
    css(node, style)
    const _style = node.style
    justifyContent && (_style.justifyContent = justifyContent)
    alignItems && (_style.alignItems = alignItems)
    alignContent && (_style.alignContent = alignContent)
    alignSelf && (_style.alignSelf = alignSelf)
    order && (_style.order = order + '')
    wrap && (_style.flexWrap = wrap + '')
    grow && (_style.flexGrow = grow + '')
    shrink && (_style.flexShrink = shrink + '')
    basis && (_style.flexBasis = basis)
    templateRows && (_style.gridTemplateRows = templateRows)
    templateColumns && (_style.gridTemplateColumns = templateColumns)
    templateAreas && (_style.gridTemplateAreas = templateAreas)
    rowGap && (_style.gridRowGap = rowGap)
    columnGap && (_style.columnGap = columnGap)
    autoRows && (_style.gridAutoRows = autoRows)
    autoColumns && (_style.gridAutoColumns = autoColumns)
    const unregister = register(node, on)

    return {
      destroy() {
        unregister()
      }
    }
  }
</script>

<div
  use:init
  class="{`${_class} grid`}"
  class:inline
  class:reverse
  class:fluid="{['height', 'width', 'both'].includes(fluid)}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style>
  div.grid {
    display: grid;
  }
  div.grid.inline {
    display: inline-grid;
  }
</style>
