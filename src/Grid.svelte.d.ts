import type { SvelteComponentTyped } from 'svelte'
import type { JustifyContent, AlignItems, Wrap } from './types'

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

  colStart?: string
  colEnd?: string
  rowStart?: string
  rowEnd?: string
  col?: string
  row?: string
  area?: string
  justifySelf?: JustifySelf
  alignSelf?: GridAlignSelf

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

declare class Grid extends SvelteComponentTyped<GridProps> {}

export default Grid
