import React from 'react'
import {render, findByText, queryByText} from '@testing-library/react'

import App from './App'

test('renders not found message', async () => {
  const {container} = render(<App />)

  const notFoundMessage = await findByText(container, 'PLAY AGAIN')

  expect(notFoundMessage).toBeInTheDocument()
  expect(notFoundMessage.tagName).toBe('button')
})
