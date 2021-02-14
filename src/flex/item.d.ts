import type { SvelteComponentTyped } from 'svelte'
import type { FlexAlignSelf } from '../types'

export interface ItemProps {
  order?: string
  grow?: string
  shrink?: string
  basis?: string
  alignSelf?: FlexAlignSelf
}

/**
 * @description Layouts Flex Item
 */
declare class Item extends SvelteComponentTyped<ItemProps> {}

export default Item
