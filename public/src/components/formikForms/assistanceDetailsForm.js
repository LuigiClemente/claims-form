import {
    TextField,
    FormControl,
    Grid,
    Select,
    MenuItem,
    InputLabel,
    Box
  } from "@mui/material";
  import { useTranslation } from 'react-i18next';
  import { createTheme, ThemeProvider } from '@mui/material/styles';
  
  const AssistanceDetailsForm = ({ errors, values, handleChange }) => {
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
         <Grid container spacing={2}>
        <Grid item xs={6}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{t('Select assistance type')}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="assistance"
            value={values.assistance}
            label={t('Select assistance type')}
            id="assistance"
            onChange={handleChange}
            error={!!errors.assistance}
            helperText={errors.assistance}
            fullWidth
          >
            <MenuItem value="food">{t('Food')}</MenuItem>
            <MenuItem value="accommodation">{t('Accommodation')}</MenuItem>
            <MenuItem value="transport">{t('Transport')}</MenuItem>
            <MenuItem value="none">{t('None')}</MenuItem>
          </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
        <TextField
          name="assistanceDetails"
          label={t('Assistance Details (if any)')}
          value={values.assistanceDetails}
          onChange={handleChange}
          multiline
          rows={4}
          error={!!errors.assistanceDetails}
          helperText={errors.assistanceDetails}
          fullWidth
        />
      </Grid>
      </Grid>
      </Box>
      </Grid>
    );
  };
  
  export default AssistanceDetailsForm;
  