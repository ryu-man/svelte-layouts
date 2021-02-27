import { render } from '@testing-library/svelte'
import {Item} from '../../src/grid'

it('grid item test', () => {
  const { container } = render(Item, {
    target: document.body,
    props: {
      alignSelf: 'end',
      class: 'gg'
    }
  })

  expect(container.querySelector('.grid-item').style.alignSelf).toBe('end')
})
