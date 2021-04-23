import type { SvelteComponentTyped } from 'svelte'
import {
  JustifyContent,
  AlignItems,
  Wrap,
  GridAlignSelf,
  JustifySelf,
  FlexAlignSelf
} from '../types'
import Item from '../Item.svelte'
import ItemRow from './item.row'
import ItemCol from './item.column'
import ItemGrid from './item.grid'

declare type FluidType = 'width' | 'height' | 'both'

export interface FlexProps {
  justifyContent?: JustifyContent
  alignItems?: AlignItems
  alignContent?: AlignItems
  wrap?: Wrap
  inline?: boolean
  reverse?: boolean
  alignSelf?: string
  gap?: string

  order?: string
  grow?: string
  shrink?: string
  basis?: string
  alignSelf?: FlexAlignSelf

  colStart?: string
  colEnd?: string
  rowStart?: string
  rowEnd?: string
  col?: string
  row?: string
  area?: string
  justifySelf?: JustifySelf
  alignSelf?: GridAlignSelf

  fluid?: FluidType
  class?: string
  style?: CSSStyleDeclaration
}

/**
 * Layouts Flex
 */
declare class Flex extends SvelteComponentTyped<FlexProps> {
  /**
   * @deprecated
   */
  static item: new () => Item
  /**
   * @deprecated
   */
  static row: new () => ItemRow
  /**
   * @deprecated
   */
  static col: new () => ItemCol
  /**
   * @deprecated
   */
  static grid: new () => ItemGrid
  
}

export default Flex
