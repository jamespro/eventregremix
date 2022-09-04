import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import GlobalHeader from './GlobalHeader.component'
import GlobalFooter from './GlobalFooter.component'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      <GlobalHeader />
      <Container>
        <Paper>{children}</Paper>
      </Container>
      <GlobalFooter />
    </>
  )
}
