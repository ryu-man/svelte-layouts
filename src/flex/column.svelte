<script>
  import { css, classNames } from '../utils'

  export let alignContent
  export let alignItems
  export let fluid
  export let gap
  export let inline
  export let justifyContent
  export let reverse
  export let style
  export let wrap
  let _class
  export { _class as class }
</script>

<div
  use:css="{{ ...style, alignContent, alignItems, gap, justifyContent, wrap }}"
  class="{classNames(_class, { reverse, inline, fluid }, 'column', 'layout')}"
>
  <slot />
</div>

<style>
  .layout {
    display: flex;
  }
  .column {
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
