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
  use:css="{{...style,  alignSelf, basis, grow, order, shrink}}"
  class="{classNames(_class, 'flex-item')}"
>
  <slot />
</div>
