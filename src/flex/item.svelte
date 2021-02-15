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
  use:css="{{
    ...style,
    alignSelf,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink,
    order
  }}"
  class="{classNames(_class, 'flex-item')}"
>
  <slot />
</div>
