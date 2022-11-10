import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData, useParams } from '@remix-run/react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ReginfoForm from '~/src/Components/Forms/ReginfoForm.component'

// type LoaderData = {
//   eventCode: string
// }

// export const loader: LoaderFunction = async ({ params }) => {}

export default function Reginfo() {
  return (
    <Box sx={{ m: 8, p: 8 }}>
      <Typography variant="h2">Contact Info</Typography>
      <ReginfoForm />
    </Box>
  )
}
