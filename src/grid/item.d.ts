import type { SvelteComponentTyped } from 'svelte'
import { JustifySelf, GridAlignSelf } from './alignment'
import { SharedProps } from './shared_props'

export interface ItemProps extends SharedProps {
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
