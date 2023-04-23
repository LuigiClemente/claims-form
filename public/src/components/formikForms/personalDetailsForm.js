import {
    TextField,
    Grid, Box, Typography
  } from "@mui/material";
  import { useTranslation } from 'react-i18next';
  import { createTheme, ThemeProvider } from '@mui/material/styles';

const PersonalDetailsForm = ({ errors, values, handleChange }) => {
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
            "I’ll need some passenger info to get things moving."
          )}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
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
          </Grid>
          <Grid item xs={6}>
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
          </Grid>
          <Grid item xs={6}>
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
          </Grid>
          <Grid item xs={6}>
            {" "}
            <TextField
          name="phone"
          label={t('Phone Number')}
          value={values.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
          fullWidth
        />
          </Grid>
        </Grid>
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
