import * as React from 'react';

// TODO: move styles to css in js
export const CenteredLayout : React.SFC = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20vh',
        height: '100vh',
        boxSizing: 'border-box',
        padding: '2rem',
        overflow: 'auto'
      }}
    >
      {props.children}
    </div>
  )
}