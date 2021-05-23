import type FlexContainer from './flex'
import {
  JustifyContent,
  AlignItems,
  Wrap,
  GridAlignSelf,
  JustifySelf,
  FlexAlignSelf
} from './types'

declare type FluidType = 'width' | 'height' | 'both'

declare class Column extends FlexContainer {}

export default Column
