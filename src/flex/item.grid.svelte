<script>
  import Grid from '../Grid.svelte'
  import { classNames } from '../utils'

  export let alignSelf
  export let basis
  export let grow
  export let order
  export let shrink
  export let style

  export let alignContent
  export let alignItems
  export let autoCols
  export let autoRows
  export let colGap
  export let fluid
  export let inline
  export let justifyContent
  export let reverse
  export let rowGap
  export let templateAreas
  export let templateCols
  export let templateRows

  let _class
  export { _class as class }
</script>

<Grid
  class="{classNames(_class, 'flex-item')}"
  style="{style}"
  alignContent="{alignContent}"
  alignItems="{alignItems}"
  autoCols="{autoCols}"
  autoRows="{autoRows}"
  colGap="{colGap}"
  fluid="{fluid}"
  inline="{inline}"
  justifyContent="{justifyContent}"
  reverse="{reverse}"
  rowGap="{rowGap}"
  templateAreas="{templateAreas}"
  templateCols="{templateCols}"
  templateRows="{templateRows}"
  alignSelf="{alignSelf}"
  basis="{basis}"
  grow="{grow}"
  shrink="{shrink}"
  order="{order}"
>
  <slot />
</Grid>
