<script>
  import Column from '../flex/column.svelte'
import { classNames } from '../utils';
  import { init } from './item.svelte'

  export let alignContent
  export let alignItems
  export let fluid
  export let gap
  export let inline
  export let justifyContent
  export let reverse
  export let style
  export let wrap

  export let alignSelf
  export let basis
  export let grow
  export let order
  export let shrink

  let _class
  export { _class as class }
</script>

<Column
  class="{classNames(_class, 'flex-item')}"
  style="{style}"
  onMount="{(node) => init(node, { alignSelf, basis, grow, order, shrink })}"
  alignContent="{alignContent}"
  alignItems="{alignItems}"
  fluid="{fluid}"
  gap="{gap}"
  inline="{inline}"
  justifyContent="{justifyContent}"
  reverse="{reverse}"
  wrap="{wrap}"
>
  <slot />
</Column>
