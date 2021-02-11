import type { SvelteComponentTyped } from 'svelte'
import { JustifyContent, AlignItems } from '../alignmentt'
import { Wrap } from '../wrapp'
import { SharedProps } from '../shared_props'
import FlexItem from './itemm'

declare type FluidType = 'width' | 'height' | 'both'

export interface FlexProps extends SharedProps {
  justifyContent?: JustifyContent
  alignItems?: AlignItems
  alignContent?: AlignItems
  wrap?: Wrap
  inline?: boolean
  reverse?: boolean
  order?: string
  grow?: string
  shrink?: string
  basis?: string
  alignSelf?: string
  gap?: string
  fluid?: FluidType
}

/**
 * Layouts Flex
 */
declare class Flex extends SvelteComponentTyped<FlexProps> {
    static item: new () => Item
    static row: new () => ItemRow
    static column: new () => ItemColumn
    static grid: new () => ItemGrid
}

export default Flex
