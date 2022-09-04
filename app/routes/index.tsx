import { Link } from '@remix-run/react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function Index() {
  return (
    <main>
      <Box sx={{ mt: 2, mb: 2 }}>
        <Typography variant="h2" component="h1" gutterBottom textAlign="center">
          Upcoming Events
        </Typography>
        <Box sx={{ ml: 2, mb: 8, pb: 8 }}>
          <Typography variant="h4">
            <Link to="myst1223">Mystery Convention 2023</Link>
          </Typography>
        </Box>
      </Box>
    </main>
  )
}
