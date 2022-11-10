import Typography from '@mui/material/Typography'
import { TextInput } from '~/src/Components/Elements/TextInput'
import { SubmitButton } from '~/src/Components/Elements/SubmitButton'
// import { SelectInput } from '~/src/Components/Elements/SelectInput'

export default function ReginfoForm() {
  //   const jobTypeOptions = [
  //     { value: 'designer', text: 'Designer' },
  //     { value: 'developer', text: 'Developer' },
  //     { value: 'manager', text: 'Manager' },
  //   ]

  return (
    <section>
      <Typography>ReginfoForm</Typography>
      <TextInput size={6} name="firstName" label="First Name" />
      <TextInput size={6} name="lastName" label="Last Name" />
      {/* <SelectInput
        size={6}
        name="jobType"
        label="Job Type"
        options={jobTypeOptions}
      /> */}
      <SubmitButton />
    </section>
  )
}
