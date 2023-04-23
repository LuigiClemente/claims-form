import * as React from "react";
import { TextField, Grid, Box, Typography} from "@mui/material";
import { useTranslation } from "react-i18next";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createTheme } from '@mui/material/styles';


const ScheduleDateForm = ({ errors, values, handleChange }) => {
  const { t } = useTranslation();

 
  const theme = createTheme({
    // your theme configuration options
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Grid container rowSpacing={3} spacing={2}>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1000,
          height: 300,
          backgroundColor: "#f3f6f9",
          borderColor: "primary.main",
          borderRadius: 2,
          ml: 2,
          mr: 2,
          mt: 6,
          pr: 5,
          pl: 5,
          pt: 6,
          [theme.breakpoints.up("md")]: {
            ml: 30,
            mr: 30,
          },
        }}
      >
        <Typography mb={2}>
          {t(
            "What was your scheduled departure date?"
          )}
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            {" "}
            <TextField type="date"  value={values.departureDate}     error={!!errors.departureDate}
              name="departureDate"  helperText={errors.departureDate}
             
              onChange={handleChange}/>
          </Grid>
        </Grid>
      </Box>

    </Grid>
  </LocalizationProvider>
   
  );
};

export default ScheduleDateForm;
