import { useField } from "remix-validated-form";
import { Grid, FormControl, InputLabel, Select, MenuItem, FormHelperText} from "@mui/material";

type MyInputProps = {
  name: string;
  label: string;
  options: Array<object>;
  size: number;
};

export const SelectInput = ({ name, label, options, size }: MyInputProps) => {
    const { error, getInputProps } = useField(name);
  return (
    <Grid item xs={size}>
        <FormControl fullWidth error={Boolean(error)}>
            <InputLabel id={name+"-label"}>{label}</InputLabel>
            <Select labelId={name+"-label"} id="job-type" label={label} name={name} error={Boolean(error)} variant="filled">
                <MenuItem value="">Please Select</MenuItem>
               { options.map((option, index) =>
                <MenuItem key={index} value={option.value}>{option.text}</MenuItem>
                )}
            </Select>
            <FormHelperText>{error}</FormHelperText>
        </FormControl>
    </Grid>
  );
};