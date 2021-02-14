import type { SvelteComponentTyped } from 'svelte'
import type { JustifyContent, AlignItems, Wrap } from '../types'
import Item from './item'
import ItemGrid from './item.grid'
import ItemRow from './item.row'
import ItemCol from './item.column'

declare type FluidType = 'width' | 'height' | 'both'

export interface GridProps {
  templateRows?: string
  templateCols?: string
  templateAreas?: string
  colGap?: string
  rowGap?: string
  autoCols?: string
  autoRows?: string
  justifyContent?: JustifyContent
  alignItems?: AlignItems
  alignContent?: AlignItems
  wrap?: Wrap
  inline?: boolean
  reverse?: boolean
  fluid?: FluidType
  class?: string
  style?: CSSStyleDeclaration
}

/**
 * @description Layouts Grid
 */
declare class Grid extends SvelteComponentTyped<GridProps> {
  static item: new () => Item
  static grid: new () => ItemGrid
  static row: new () => ItemRow
  static col: new () => ItemCol
}

export default Grid
