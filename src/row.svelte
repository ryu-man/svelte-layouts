<script lang="ts">
  import { register } from './utils/events'
  import { css } from './utils/css'

  export let style = {}
  export let inline: boolean = false
  export let reverse: boolean = false
  export let wrap: string
  export let justifyContent: string
  export let alignItems: string
  export let alignContent: string
  export let order: string
  export let grow: string
  export let shrink: string
  export let basis: string
  export let alignSelf: string
  export let fluid: string
  export let gap: string
  export let on = {}
  let _class: string = ''
  export { _class as class }

  function init(node: HTMLElement) {
    justifyContent && (node.style.justifyContent = justifyContent)
    alignItems && (node.style.alignItems = alignItems)
    alignContent && (node.style.alignContent = alignContent)
    alignSelf && (node.style.alignSelf = alignSelf)
    order && (node.style.order = order)
    wrap && (node.style.flexWrap = wrap)
    grow && (node.style.flexGrow = grow)
    shrink && (node.style.flexShrink = shrink)
    basis && (node.style.flexBasis = basis)
    gap && (node.style.gap = gap)
    const unregister = register(node, on)

    return {
      destroy() {
        unregister()
      }
    }
  }
</script>

<div
  class="{_class} {fluid} flexbox row"
  use:init
  use:css="{style}"
  class:inline
  class:reverse
  class:fluid="{['height', 'width', 'both'].includes(fluid)}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style>
  .flexbox {
    display: flex;
  }
  .row {
    flex-direction: row;
  }
  .reverse {
    flex-direction: row-reverse !important;
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
