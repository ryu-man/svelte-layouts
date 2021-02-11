import type { SvelteComponentTyped } from 'svelte'
import { FlexAlignSelf } from '../alignmentt'
import { SharedProps } from '../shared_props'

export interface ItemProps extends SharedProps{
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
