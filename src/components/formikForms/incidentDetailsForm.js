import {
  TextField,
  FormControl,
  Grid,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { useTranslation } from 'react-i18next';

const IncidentDetailsForm = ({ errors, values, handleChange }) => {
    const { t } = useTranslation();

  return (
    <Grid container rowSpacing={3} spacing={2}>
      <Grid item xs={6} md={6} sm={6} lg={6}>
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{t('Select incident type')}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          name="incidentType"
          value={values.incidentType}
          label={t('Select incident type')}
          id="incidentType"
          onChange={handleChange}
          error={!!errors.incidentType}
          helperText={errors.incidentType}
          fullWidth
        >
          <MenuItem value="delayed">{t('Delayed')}</MenuItem>
          <MenuItem value="cancelled">{t('Cancelled')}</MenuItem>
        </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6} md={6} sm={6} lg={6}>
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
      <Grid item xs={6} md={6} sm={6} lg={6}>
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
  );
};

export default IncidentDetailsForm;
