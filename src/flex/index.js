import { default as Row } from './row.svelte'
import { default as Column } from './column.svelte'
import { default as Item } from './item.svelte'
import { default as ItemRow } from './item.row.svelte'
import { default as ItemColumn } from './item.column.svelte'
import { default as ItemGrid } from './item.grid.svelte'

Row.item = Item
Row.row = ItemRow
Row.column = ItemColumn
Row.grid = ItemGrid

Column.item = Item
Column.row = ItemRow
Column.column = ItemColumn
Column.grid = ItemGrid

export { Row, Column, Item, ItemRow, ItemColumn, ItemGrid }
