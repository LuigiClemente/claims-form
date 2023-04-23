import {
  TextField,
  Grid, Box, Typography
} from "@mui/material";
import { useTranslation } from 'react-i18next';
import { createTheme } from '@mui/material/styles';

const PersonalDetailsForm = ({ errors, values, handleChange }) => {
  const { t } = useTranslation();
  const theme = createTheme({
    // your theme configuration options
  });
  return (
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
        <Typography mb={2}>
          {t(
            "I’ll need some passenger info to get things moving."
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
              error={!!errors.firstName}
              name="firstName"
              label={t('firstName')}
              value={values.firstName}
              helperText={errors.firstName}
              onChange={handleChange}
            />
          </Box>
          <Box className="col-lg-6 col-sx-12" sx={{
            [theme.breakpoints.up("md")]: {
              pl: 1,
            }, [theme.breakpoints.down("md")]: {
              pt: 3,
            },
          }}>
            {" "}
            <TextField
              fullWidth
              name="lastName"
              label={t('Last Name')}
              value={values.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </Box>
        </Box>
        <Box sx={{
          display: "flex", pt: 3, pb: 2, [theme.breakpoints.down("md")]: {
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
              error={!!errors.email}
              name="email"
              label={t('Email')}
              value={values.email}
              helperText={errors.email}
              onChange={handleChange}
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
              name="phoneNumber"
              label={t('Phone Number')}
              value={values.phoneNumber}
              onChange={handleChange}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
              fullWidth
            />
          </Box>
        </Box>
      </Box>






      {/*   <Grid item xs={6} md={6} sm={6} lg={6}>
        <TextField
          name="addressLine"
          label={t('Address')}
          value={values.addressLine}
          onChange={handleChange}
          fullWidth
          />
      </Grid> */}
    </Grid>
  );
};

export default PersonalDetailsForm;
