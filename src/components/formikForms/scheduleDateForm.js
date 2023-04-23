import * as React from "react";
import { TextField, Grid, Box, Typography } from "@mui/material";
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
      <Grid >
        <Box
          sx={{
            width: "100%",
            // maxWidth: 1000,
            height: 300,
            backgroundColor: "#f3f6f9",
            borderColor: "primary.main",
            borderRadius: 2,
            // ml: 2,
            // mr: 2,
            mt: 6,
            pr: 5,
            pl: 5,
            pt: 6,

            [theme.breakpoints.up("md")]: {
              // ml: 30,
              // mr: 30,
            },
          }}
        >
          <Typography mb={2}>
            {t(
              "What was your scheduled departure date?"
            )}
          </Typography>
          <Grid >
            <div className="col-lg-6">
              {" "}
              <input style={{ paddingTop: "8px", paddingBottom: "8px", minWidth: "100%", borderRadius: "5px", border: "2px solid #6c757d" }} type="date" value={!values.depatureDate ? values.depatureDate : values.depatureDate.substring(0, 10)} error={!!errors.departureDate}
                name="departureDate" 
                helperText={errors.departureDate}
                onChange={handleChange} />
            </div>
          </Grid>
        </Box>

      </Grid>
    </LocalizationProvider >

  );
};

export default ScheduleDateForm;
