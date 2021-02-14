import type { SvelteComponentTyped } from 'svelte'
import type { JustifySelf, GridAlignSelf } from '../types'

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
}

/**
 * Layouts Item
 */
/**
 * @description Layouts Grid Item
 */
declare class Item extends SvelteComponentTyped<ItemProps> {
}

export default Item
