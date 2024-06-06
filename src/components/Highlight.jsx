import React from 'react';

export default function Highlight({
  children,
  color,
  highlight = 'bg',
  fontWeight = 'normal',
  textDecoration = 'none',
  fontStyle = 'normal',
  textAlign = 'left'
}) {
  if (highlight === 'fg') {
    return (
      <span
        style={{
          color,
          fontWeight,
          textDecoration,
          fontStyle,
          textAlign
        }}
      >
        {children}
      </span>
    );
  } else if (highlight === 'format') {
    return (
      <div style={{
        textAlign,
        color,
        fontWeight,
        textDecoration,
        fontStyle
      }}>
        {children}
      </div>
    );
  } else {
    return (
      <span
        style={{
          backgroundColor: color,
          borderRadius: '4px',
          color: '#fff',
          padding: '0.2rem',
          paddingTop: '0',
        }}
      >
        {children}
      </span>
    );
  }
}
