<script lang="ts">
  import { css } from './utils/css'

  export let columnStart: string
  export let columnEnd: string
  export let rowStart: string
  export let rowEnd: string
  export let column: string
  export let row: string
  export let area: string
  export let justifySelf: string
  export let alignSelf: string
  export let style: {}

  function init(node: HTMLElement) {
    style && css(node, style)
    const _style = node.style
    columnStart && (_style.gridColumnStart = columnStart)
    columnEnd && (_style.gridColumnEnd = columnEnd)
    rowStart && (_style.gridRowStart = rowStart)
    rowEnd && (_style.gridRowEnd = rowEnd)
    column && (_style.gridColumn = column)
    row && (_style.gridRow = row)
    area && (_style.gridColumnStart = area)
    justifySelf && (_style.justifySelf = justifySelf)
    alignSelf && (_style.alignSelf = alignSelf)
  }
</script>

<div class="grid-item" use:init>
  <slot />
</div>

<style>
  /* your styles go here */
</style>
