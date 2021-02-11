import type { SvelteComponentTyped } from 'svelte'
import type { FlexProps } from './flex'
import type { ItemProps } from './item'

interface ItemFlexProps extends ItemProps, FlexProps {}

/**
 * @description Layouts ItemFlex
 */
declare class ItemFlex extends SvelteComponentTyped<ItemFlexProps> {}

export default ItemFlex
