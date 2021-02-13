import { default as Row } from './row.svelte'
import { default as Col } from './column.svelte'
import { default as Item } from './item.svelte'
import { default as ItemRow } from './item.row.svelte'
import { default as ItemCol } from './item.column.svelte'
import { default as ItemGrid } from './item.grid.svelte'

Row.item = Item
Row.row = ItemRow
Row.col = ItemCol
Row.grid = ItemGrid

Col.item = Item
Col.row = ItemRow
Col.col = ItemCol
Col.grid = ItemGrid

export { Row, Col, Item, ItemRow, ItemCol, ItemGrid }
