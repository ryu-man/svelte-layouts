import Grid from '../Grid.svelte'
import Item from '../Item.svelte'
import ItemGrid from './item.grid.svelte'
import ItemRow from './item.row.svelte'
import ItemCol from './item.column.svelte'

Grid.item = Item
Grid.grid = ItemGrid
Grid.row = ItemRow
Grid.col = ItemCol