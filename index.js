import React, { setGlobal } from 'reactn'
import { render } from 'react-dom'

import { App } from '/src/App'

// Default State
setGlobal({
  name: 'World'
})

render(<App />, document.querySelector('#root'))
