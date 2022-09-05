import type { LoaderFunction, ActionFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import invariant from 'tiny-invariant'
import { Outlet, useLoaderData, useParams } from '@remix-run/react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type EventData = {
  eventId: string
  eventCode: string
  eventName: string
  eventStartDate: string
  eventEndDate: string
  eventDate: string
  eventVenue: string
  eventCity: string
  eventState: string
  eventCountry: string
  eventZipcode: string
}

type LoaderData = {
  eventData: EventData
}

export const loader: LoaderFunction = async ({ params }) => {
  const { eventCode } = params
  //   //   console.log('eventCode', eventCode)
  invariant(eventCode, 'eventCode is required')
  const eventData = {
    eventId: 'asldfkhaweiofh',
    eventCode: 'myst1223',
    eventName: 'Mystery Convention 2023',
    eventStartDate: '2023-10-29 08:00',
    eventEndDate: '2023-10-31 23:59:59',
    eventDates: 'Oct. 29-31, 2023',
    eventVenue: 'Mystery Convention Center',
    eventCity: 'New Orleans',
    eventState: 'LA',
    eventCountry: 'United States',
    eventZipcode: '10000',
  }

  return json(eventData)
}

export default function Index() {
  const eventData = useLoaderData() as LoaderData
  //   const something = eventData.eventId
  const params = useParams()
  return (
    <>
      <Box
        sx={{ bgcolor: 'secondary.main', color: 'primary.contrastText', p: 2 }}
      >
        <Typography variant="h3">{eventData.eventName}</Typography>
        <Typography variant="h4">{eventData.eventDates}</Typography>
        <Typography variant="h5">
          {eventData.eventVenue}, {eventData.eventCity} {eventData.eventState}
        </Typography>
      </Box>
      <Box
        sx={{
          color: 'grey.700',
          p: 2,
          textAlign: 'center',
        }}
      >
        <Typography>275 days until the event!</Typography>
      </Box>

      <Outlet />
      <Box sx={{ p: 2, textAlign: 'center', color: 'grey.400' }}>
        <Typography>
          For registration assistance, please email notreal@mailinator.com or
          call (555) 555-1212
        </Typography>
        <Typography>Click for Event Info</Typography>
        <Typography>social icons</Typography>
      </Box>
    </>
  )
}
