import React, { useGlobal, useEffect } from 'reactn'
import { init } from '/src/logic'
import { Full } from '/src/Elements'

// Don't export as default so you can use this plugin:
// https://marketplace.visualstudio.com/itemdetails?itemName=kidandcat.fimports
// With this all imports will be absolute (better for readability) without any effor
// simply write import {App}

// React Hooks Example
export function App () {
  const [name] = useGlobal('name')

  // ComponentDidMount
  useEffect(() => {
    const unmount = init()

    // ComponentWillUnmount
    return unmount
  }, [])

  return <Full>
    <div>
      Hello {name}!!
    </div>
  </Full>
}

// Exact same component in Class form
export class App2 extends React.Component {
  componentDidMount () {
    this.unmount = init()
  }

  componentWillUnmount () {
    this.unmount()
  }

  render () {
    return <Full>
      <div>
      Hello {this.global.name}!!
      </div>
    </Full>
  }
}
