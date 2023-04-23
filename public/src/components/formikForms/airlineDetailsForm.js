import { TextField, Grid, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const AirlineDetailsForm = ({ errors, values, handleChange }) => {
  const { t } = useTranslation();
  const theme = createTheme({
    // your theme configuration options
  });
  return (
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
            "Hi! Let’s see if the airline owes you compensation. Where were you flying to?"
          )}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {" "}
            <TextField
              fullWidth
              error={!!errors.departureAirport}
              name="departureAirport"
              label={t("departingFrom")}
              placeholder="eg. New York"
              value={values.departureAirport}
              helperText={errors.departureAirport}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            {" "}
            <TextField
              fullWidth
              error={!!errors.arrivalAirport}
              name="arrivalAirport"
              label={t("Final destination")}
              placeholder="eg. London"
              value={values.arrivalAirport}
              helperText={errors.arrivalAirport}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>

  { /*   <Grid item xs={6} md={6} sm={6} lg={6}>
        <TextField
          fullWidth
          error={!!errors.flightNumber}
          name="flightNumber"
          label={t("Flight Number")}
          value={values.flightNumber}
          helperText={errors.flightNumber}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={6} md={6} sm={6} lg={6}>
        <TextField
          fullWidth
          error={!!errors.airline}
          name="airline"
          label={t("Airline")}
          value={values.airline}
          helperText={errors.airline}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={6} md={6} sm={6} lg={6}>
        <TextField
          fullWidth
          error={!!errors.scheduledDeparture}
          name="scheduledDeparture"
          label={t("Scheduled Departure")}
          value={values.scheduledDeparture}
          helperText={errors.scheduledDeparture}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={6} md={6} sm={6} lg={6}>
        <TextField
          fullWidth
          error={!!errors.actualDeparture}
          name="actualDeparture"
          label={t("Actual Departure")}
          value={values.actualDeparture}
          helperText={errors.actualDeparture}
          onChange={handleChange}
        />
          </Grid> */}
    </Grid>
  );
};

export default AirlineDetailsForm;
