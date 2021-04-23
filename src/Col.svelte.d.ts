import type Flex from './flex/flex'
import type { SvelteComponentTyped } from 'svelte'
import {
  JustifyContent,
  AlignItems,
  Wrap,
  GridAlignSelf,
  JustifySelf,
  FlexAlignSelf
} from './types'
import Item from './item.svelte'
import ItemRow from './item.row'
import ItemCol from './item.column'
import ItemGrid from './item.grid'

declare type FluidType = 'width' | 'height' | 'both'

declare class Column extends Flex {}

export default Column
