import { TextField, Grid, Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useTranslation } from "react-i18next";

const AirlineCheckForm = ({ errors, values, handleChange }) => {
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
        {" "}
        {t(
          "OK, I’ll just need a few flight details so I can check your eligibility."
        )}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} md={6}>
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
      </Grid>
    </Box>
    </Grid>
  );
};

export default AirlineCheckForm;
