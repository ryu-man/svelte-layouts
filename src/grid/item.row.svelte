<script>
  import Row from '../Row.svelte'
  import { classNames } from '../utils'

  export let alignSelf
  export let area
  export let col
  export let colEnd
  export let colStart
  export let justifySelf
  export let row
  export let rowEnd
  export let rowStart
  export let style

  export let alignContent
  export let alignItems
  export let fluid
  export let gap
  export let inline
  export let justifyContent
  export let reverse
  export let wrap

  let _class
  export { _class as class }
</script>

<Row
  class="{classNames(_class, 'grid-item')}"
  style="{style}"
  alignContent="{alignContent}"
  alignItems="{alignItems}"
  fluid="{fluid}"
  gap="{gap}"
  inline="{inline}"
  justifyContent="{justifyContent}"
  reverse="{reverse}"
  wrap="{wrap}"
  colStart="{colStart}"
  colEnd="{colEnd}"
  rowStart="{rowStart}"
  rowEnd="{rowEnd}"
  col="{col}"
  row="{row}"
  area="{area}"
  justifySelf="{justifySelf}"
  alignSelf="{alignSelf}"
>
  <slot />
</Row>
