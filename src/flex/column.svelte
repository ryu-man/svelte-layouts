<script context="module">
  export function init(
    node,
    { alignContent, alignItems, gap, justifyContent, wrap }
  ) {
    justifyContent && (node.style.justifyContent = justifyContent)
    alignItems && (node.style.alignItems = alignItems)
    alignContent && (node.style.alignContent = alignContent)
    wrap && (node.style.flexWrap = wrap)
    gap && (node.style.gap = gap)

    return {
      destroy() {}
    }
  }
</script>

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
  export let onMount = () => {}
  let _class
  export { _class as class }
</script>

<div
  use:css="{style}"
  use:init="{{
    alignContent,
    alignItems,
    gap,
    justifyContent,
    wrap
  }}"
  use:onMount
  class="{classNames(
    _class,
    { reverse, inline, fluid },
    'column',
    'layout'
  )}"
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
