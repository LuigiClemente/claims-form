import * as React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme } from '@mui/material/styles';

const ClaimForm = ({ errors, values, handleChange }) => {
  const { t } = useTranslation();

  const theme = createTheme({
    // your theme configuration options
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid>
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
          <Typography mb={2}>{t("Why make a Goodwill Claim?")}</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {" "}
              <Typography mb={2}>
                {t("* Refund — up to the full ticket price")}
              </Typography>
              <Typography mb={2}>{t("* Vouchers worth up to $125")}</Typography>
              <Typography mb={2}>{t("* Free air miles ")}</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: "100%",
            // maxWidth: 1000,
            // height: 200,
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

          <Grid container spacing={2}>
            <Grid item xs={12}>
              {" "}
              <Typography mb={2}>
                {t(
                  "Successful Goodwill Claim compensation is often valued at around $125. Following a win we take a fixed fee of $24.99, but if we don't win — you won't be charged a cent."
                )}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: "100%",
            // maxWidth: 1000,
            // height: 100,
            backgroundColor: "#f3f6f9",
            borderColor: "primary.main",
            borderRadius: 2,
            // ml: 2,
            // mr: 2,
            mt: 6,
            pr: 5,
            pl: 5,
            pt: 3,
            [theme.breakpoints.up("md")]: {
              // ml: 30,
              // mr: 30,
            },
          }}
        >

          <Grid container spacing={2}>
            <Grid item xs={12}>
              {" "}
              <Typography mb={2}>
                {t(
                  "We've helped over 16 million air passengers."
                )}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </LocalizationProvider>
  );
};

export default ClaimForm;
