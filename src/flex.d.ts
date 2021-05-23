import type { SvelteComponentTyped } from 'svelte'
import {
  JustifyContent,
  AlignItems,
  Wrap,
  GridAlignSelf,
  JustifySelf,
  FlexAlignSelf
} from './types'

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
declare class Flex extends SvelteComponentTyped<FlexProps> {}

export default Flex
