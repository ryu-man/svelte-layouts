import Grid from './grid.svelte'
import Item from './item.svelte'
import ItemGrid from './item.grid.svelte'
import ItemRow from './item.row.svelte'
import ItemCol from './item.column.svelte'

Grid.item = Item
Grid.grid = ItemGrid
Grid.row = ItemRow
Grid.col = ItemCol