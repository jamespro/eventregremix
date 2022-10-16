import { useIsSubmitting } from "remix-validated-form";
import { Button, Grid } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const SubmitButton = () => {
  const isSubmitting = useIsSubmitting();
  return (
    <>
    <Grid item xs={8} />
    <Grid item xs={4}>
        <Button type="submit" variant="contained" size="large" endIcon={<ArrowRightAltIcon />} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Continue"}
        </Button>
    </Grid>
    </>
  );
};