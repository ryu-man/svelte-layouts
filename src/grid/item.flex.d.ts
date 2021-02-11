import type { SvelteComponentTyped } from 'svelte'
import { ItemProps } from './item'
import { FlexProps } from '../flex/flex'

interface ItemFlexProps extends ItemProps, FlexProps, SharedProps {}

declare class ItemFlex extends SvelteComponentTyped<ItemFlexProps> {}
