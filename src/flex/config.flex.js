import Row from './row.svelte'
import Col from './column.svelte'
import Item from './item.svelte'
import ItemRow from './item.row.svelte'
import ItemCol from './item.column.svelte'
import ItemGrid from './item.grid.svelte'

Row.item = Item
Row.row = ItemRow
Row.col = ItemCol
Row.grid = ItemGrid

Col.item = Item
Col.row = ItemRow
Col.col = ItemCol
Col.grid = ItemGrid