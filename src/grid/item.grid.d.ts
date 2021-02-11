import type { SvelteComponentTyped } from 'svelte'
import { ItemProps } from './item'
import type { GridProps } from './grid'

interface ItemGridProps extends ItemProps, GridProps {}

export default class ItemGrid extends SvelteComponentTyped<ItemGridProps> {}
