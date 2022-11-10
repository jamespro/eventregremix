import { useField } from 'remix-validated-form'
import { TextField, Grid } from '@mui/material'

type MyInputProps = {
  name: string
  label: string
  size: number
}

export const TextInput = ({ size, name, label }: MyInputProps) => {
  const { error, getInputProps } = useField(name)
  return (
    <Grid item xs={size}>
      <TextField
        fullWidth
        label={label}
        name={name}
        type="text"
        variant="filled"
        placeholder={label}
        error={Boolean(error)}
        helperText={error}
      />
    </Grid>
  )
}
