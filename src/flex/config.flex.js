import Row from '../Row.svelte'
import Col from '../Col.svelte'
import Item from '../Item.svelte'
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