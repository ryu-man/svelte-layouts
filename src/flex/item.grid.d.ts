import type { SvelteComponentTyped } from "svelte";
import type { GridProps } from "../grid/grid";
import type ItemFlex from "./item.flex";

interface ItemGridProps extends ItemFlex, GridProps{}

/**
 * @description 
 */
declare class ItemGrid extends SvelteComponentTyped<ItemGridProps> {}

export default ItemGrid