import { TextField, Grid, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { createTheme } from '@mui/material/styles';

const AirlineDetailsForm = ({ errors, values, handleChange }) => {
  const { t } = useTranslation();
  const theme = createTheme({
    // your theme configuration options
  });
  console.log(values);
  return (
    <Grid >
      <Box
        sx={{
          // width: "100%",
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
            "Hi! Let’s see if the airline owes you compensation. Where were you flying to?"
          )}
        </Typography>
        <Box sx={{
          display: "flex", [theme.breakpoints.down("md")]: {
            display: "block",
          },
        }}>
          <Box className="col-lg-6 col-sx-12" sx={{
            [theme.breakpoints.up("md")]: {
              pr: 1,
            },
          }}>
            {" "}
            <TextField
              fullWidth
              error={!!errors.departingFrom}
              name="departingFrom"
              label={t("departingFrom")}
              placeholder="eg. New York"
              value={values.departingFrom}
              helperText={errors.departingFrom}
              onChange={handleChange}
            />
          </Box>
          <Box className="col-lg-6 col-sx-12" sx={{
            [theme.breakpoints.up("md")]: {
              pl: 1,
              pb: 3,
            }, [theme.breakpoints.down("md")]: {
              pt: 3,
              pb: 2,
            },
          }}>
            {" "}
            <TextField
              fullWidth
              error={!!errors.finalDestination}
              name="finalDestination"
              label={t("Final destination")}
              placeholder="eg. London"
              value={values.finalDestination}
              helperText={errors.finalDestination}
              onChange={handleChange}
            />
          </Box>
        </Box>
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
