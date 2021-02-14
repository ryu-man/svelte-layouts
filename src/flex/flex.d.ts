import type { SvelteComponentTyped } from 'svelte'
import { JustifyContent, AlignItems, Wrap } from '../types'
import Item from './item'
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
  fluid?: FluidType
  class?: string
  style?: CSSStyleDeclaration
}

/**
 * Layouts Flex
 */
declare class Flex extends SvelteComponentTyped<FlexProps> {
    static item: new () => Item
    static row: new () => ItemRow
    static col: new () => ItemCol
    static grid: new () => ItemGrid
}

export default Flex
