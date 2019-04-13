import React from 'reactn'

export function Full ({ children }) {
  return <div style={{
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    {children}
  </div>
}

export function Text ({ children }) {

}
