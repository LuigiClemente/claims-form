import React, {useState} from "react";
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
  
  const [names, setNames] = useState(() => {
    let names = "";
    values.fullName.forEach((item, index) => {
      if (index + 1 !== values.fullName.length) {
        names += item.firstName + ", "
      }
      else {
        names += item.firstName
      }
    }
    )
    return names;
  }
  )
  const [surnames, setSurnames] = useState(() => {
    let surnames = "";
    values.fullName.forEach((item, index) => {
      if (index + 1 !== values.fullName.length) {
        surnames += item.lastName + ", "
      }
      else {
        surnames += item.lastName
      }
    }
    )
    return surnames;
  }
  )
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
          <Typography mb={2}>{t("Flight Cancellation/Delay Agreement")}</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {" "}
              <Typography mb={2}>
                {t("I ")}
                {names},
                {t("agree to the following terms and conditions:")}
              </Typography>
              <Grid sx={{paddingTop: "5px", paddingBottom: "5px" }}>
                <ul>
              <li><Typography mb={2}>{t("I authorize Emporium Concierge to represent me in filing a claim for compensation against the airline for a flight delay, cancellation, or denied boarding.")}</Typography></li>
              <li><Typography mb={2}>{t("I understand that Emporium Concierge works on a no-win, no-fee basis, and that I will not be responsible for any fees unless my claim is successful.")}</Typography></li>
              <li><Typography mb={2}>{t("I agree to provide Emporium Concierge with all of the necessary information and documentation to support my claim.")}</Typography></li>
              <li><Typography mb={2}>{t("I understand that Emporium Concierge may contact me with questions about my claim.")}</Typography></li>
              <li><Typography mb={2}>{t("I agree to be bound by the terms and conditions of Emporium Concierge's Flight Cancellation/Delay Agreement.")}</Typography></li>
              </ul>
              </Grid>
              <Typography mb={2}>{t("By signing below, I agree to the terms and conditions of this agreement.")}</Typography>
              <Typography mb={2}>{surnames}</Typography>
              <Typography mb={2}>{new Date().toLocaleDateString(t("localedate"))}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </LocalizationProvider>
  );
};

export default ClaimForm;
