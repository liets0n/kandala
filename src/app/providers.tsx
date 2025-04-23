'use client'

import React from 'react'
import { SnackbarProvider } from 'notistack'

function Providers() {
  return (
    <>
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      />
    </>
  )
}

export default Providers
