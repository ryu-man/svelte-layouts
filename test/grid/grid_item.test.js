import {render} from '@testing-library/svelte'
import GridItem from '../../src/grid_item.svelte'

const {} = render(GridItem, {
    target:document.body,
    props:{}
})