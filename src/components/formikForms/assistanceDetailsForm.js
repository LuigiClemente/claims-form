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
import { createTheme } from '@mui/material/styles';

const AssistanceDetailsForm = ({ errors, values, handleChange }) => {
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
        <Box sx={{
          display: "flex", pt: 3, pb: 2, [theme.breakpoints.down("md")]: {
            display: "block",
          },
        }}>
          <Box className="col-lg-6 col-sx-12 col-md-6" sx={{
            [theme.breakpoints.up("md")]: {
              pr: 1,
            },
          }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">{t('Select assistance type')}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="assistanceType"
                defaultValue={values.assistanceType}
                label={t('Select assistance type')}
                id="assistanceType"
                onChange={handleChange}
                error={!!errors.assistanceType}
                helperText={errors.assistanceType}
                fullWidth
              >
                <MenuItem value="food">{t('Food')}</MenuItem>
                <MenuItem value="accommodation">{t('Accommodation')}</MenuItem>
                <MenuItem value="transport">{t('Transport')}</MenuItem>
                <MenuItem value="none">{t('None')}</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className="col-lg-6 col-sx-12 col-md-6" sx={{
            [theme.breakpoints.up("md")]: {
              pl: 1,
            }, [theme.breakpoints.down("md")]: {
              pt: 3,
              pb: 2,
            },
          }}>
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
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default AssistanceDetailsForm;
