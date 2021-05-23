import type { SvelteComponentTyped } from 'svelte'
import type { FlexAlignSelf } from '../types'
import type { GridAlignSelf, JustifySelf } from './types'

export interface ItemProps {
  colStart?: string
  colEnd?: string
  rowStart?: string
  rowEnd?: string
  col?: string
  row?: string
  area?: string
  justifySelf?: JustifySelf
  alignSelf?: GridAlignSelf
  order?: string
  grow?: string
  shrink?: string
  basis?: string
  class?: string
  style?: CSSStyleDeclaration
}

/**
 * @description Layouts Flex Item
 */
declare class Item extends SvelteComponentTyped<ItemProps> {}

export default Item
