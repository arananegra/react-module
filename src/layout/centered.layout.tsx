import * as React from 'react';

// TODO: move styles to css in js
export const CenteredLayout : React.FC = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
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