<script context="module">
  export function init(node, { alignSelf, basis, grow, order, shrink }) {
    const style = node.style
    order && (style.order = order)
    grow && (style.flexGrow = grow)
    shrink && (style.flexShrink = shrink)
    basis && (style.flexBasis = basis)
    alignSelf && (style.alignSelf = alignSelf)
  }
</script>

<script>
  import { classNames, css } from '../utils'
  export let alignSelf
  export let basis
  export let grow
  export let order
  export let shrink
  export let style

  let _class
  export { _class as class }
</script>

<div
  use:css="{style}"
  use:init="{{ alignSelf, basis, grow, order, shrink }}"
  class="{classNames(_class, 'flex-item')}"
>
  <slot />
</div>
