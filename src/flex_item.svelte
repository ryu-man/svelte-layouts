<script lang="ts">
  import { css } from './utils/css'

  export let order: '0'
  export let grow: '0'
  export let shrink: '1'
  export let basis: 'auto'
  export let alignSelf: string
  export let style: {}
  function init(node: HTMLElement) {
    style && css(node, style)
    const _style = node.style
    order && (_style.order = order)
    grow && (_style.flexGrow = grow)
    shrink && (_style.flexShrink = shrink)
    basis && (_style.flexBasis = basis)
    alignSelf && (_style.alignSelf = alignSelf)
  }
</script>

<div class="flex-item" use:init>
  <slot />
</div>

<style>
  /* your styles go here */
</style>
