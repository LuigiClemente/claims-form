import { TextField, Grid, Box, Typography, RadioGroup,  FormControl, Radio, FormControlLabel } from "@mui/material";
import { useTranslation } from "react-i18next";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const IncidentCheckForm = ({ errors, values, handleChange }) => {
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
            "Now onto the flight disruption itself. What actually happened?"
          )}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {" "}
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="incidentType"
                value={values.incidentType}
                error={!!errors.incidentType}
                helperText={errors.incidentType}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="delayed"
                  control={<Radio />}
                  label=  {t(
                    "My flight was delayed"
                  )}
                />
                <FormControlLabel
                  value="canceled"
                  control={<Radio />}
                  label={t(
                    "My flight was canceled"
                  )}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
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
       
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {" "}
            <TextField
          name="delayLength"
          label={t('Delay Length')}
          value={values.delayLength}
          onChange={handleChange}
          error={!!errors.delayLength}
          helperText={errors.delayLength}
          fullWidth
        />
          </Grid>
          <Grid item xs={6}>
            {" "}
            <TextField
          name="reason"
          label={t('Reason for Delay or Cancellation')}
          value={values.reason}
          onChange={handleChange}
          multiline
          rows={4}
          error={!!errors.reason}
          helperText={errors.reason}
          fullWidth
        />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default IncidentCheckForm;
