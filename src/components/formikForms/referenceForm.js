import * as React from "react";
import { TextField, Grid, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createTheme } from '@mui/material/styles';

const ReferenceForm = ({ errors, values, handleChange }) => {
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
            // height: 300,
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
              "What's your booking reference number?"
            )}
          </Typography>
          <Box >
            <Box className="col-lg-6" sx={{ pb: 2 }}>
              {" "}
              <TextField
                name="referenceNumber"
                label={t('Reference Number')}
                value={values.referenceNumber}
                onChange={handleChange}
                error={!!errors.referenceNumber}
                helperText={errors.referenceNumber}
                fullWidth
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            // maxWidth: 1000,
            // height: 300,
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
              "How to find reference number?"
            )}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {" "}
              <Typography mb={2}>
                {t(
                  " A booking reference is a code used by airlines to keep track of individual reservations. You can find your booking reference on your e-ticket or on any emails or documents you received from the airline after booking your trip. This code will most often be 6 digits, including both letters and numbers (for example DF87G#, REDYYD, or L5W4NW). Please make sure you don't include spaces."
                )}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </LocalizationProvider>

  );
};

export default ReferenceForm;
