// import type { LoaderFunction } from '@remix-run/node'
// import { Outlet, useLoaderData, useParams } from '@remix-run/react'
import Box from '@mui/material/Box'
import { Link } from '@remix-run/react'
import Typography from '@mui/material/Typography'

// type LoaderData = {
//   eventCode: string
// }

// export const loader: LoaderFunction = async ({ params }) => {}

export default function Index() {
  return (
    <Box sx={{ m: 8, p: 8 }}>
      <Link to="/attendee/reginfo">Attendee Registration</Link>
    </Box>
  )
}
