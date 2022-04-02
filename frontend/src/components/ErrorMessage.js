import React from 'react'

const ErrorMessage = ({ variant= "info", children }) => {
  return (
    <Alert variant={variant} style={{fontSize:20}}>
        <strong>{children}</strong>
    </Alert>
  )
}

export default ErrorMessage