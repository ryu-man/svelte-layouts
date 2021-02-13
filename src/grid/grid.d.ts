import type { SvelteComponentTyped } from 'svelte'
import { JustifyContent, AlignItems } from './alignment'
import { Wrap } from './wrap'
import { SharedProps } from './shared_props'
import Item from './item'
import ItemGrid from './item.grid'
import ItemRow from './item.row'
import ItemCol from './item.column'

declare type FluidType = 'width' | 'height' | 'both'

export interface GridProps extends SharedProps {
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
  alignSelf?: string
  gap?: string
  fluid?: FluidType
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
