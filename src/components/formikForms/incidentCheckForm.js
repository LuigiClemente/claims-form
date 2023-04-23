import { TextField, Grid, Box, Typography, RadioGroup, FormControl, Radio, FormControlLabel } from "@mui/material";
import { useTranslation } from "react-i18next";
import { createTheme } from '@mui/material/styles';

const IncidentCheckForm = ({ errors, values, handleChange }) => {
  const { t } = useTranslation();
  const theme = createTheme({
    // your theme configuration options
  });

  return (
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
            "Now onto the flight disruption itself. What actually happened?"
          )}
        </Typography>
        <Grid >
          <Grid item xs={6}>
            {" "}
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="incidentType"
                defaultValue={values.flightDisruption}
                error={!!errors.flightDisruption}
                helperText={errors.flightDisruption}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="delayed"
                  control={<Radio />}
                  label={t(
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

        <Box sx={{
          display: "flex", pb: 2, [theme.breakpoints.down("md")]: {
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
              name="delayLength"
              label={t('Delay Length')}
              value={values.delayLength}
              onChange={handleChange}
              error={!!errors.delayLength}
              helperText={errors.delayLength}
              fullWidth
            />
          </Box>
          <Box className="col-lg-6 col-sx-12" sx={{
            [theme.breakpoints.up("md")]: {
              pl: 1,
            }, [theme.breakpoints.down("md")]: {
              pt: 3,
              pb: 2,
            },
          }}>
            {" "}
            <TextField
              name="delayReason"
              label={t('Reason for Delay or Cancellation')}
              value={values.delayReason}
              onChange={handleChange}
              multiline
              rows={4}
              error={!!errors.delayReason}
              helperText={errors.delayReason}
              fullWidth
            />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default IncidentCheckForm;
