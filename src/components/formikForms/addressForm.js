import { TextField, Grid, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { createTheme } from "@mui/material/styles";

const AddressForm = ({ errors, values, handleChange }) => {
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
          // height: 400,
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
        <Typography mb={2}>{t("Add Your Address")}</Typography>
        <Box sx={{
          display: "flex", [theme.breakpoints.down("md")]: {
            display: "block",
          },
        }}>
          <Box className="col-lg-6" sx={{
            [theme.breakpoints.up("md")]: {
              pr: 1,
            },
          }}>
            {" "}
            <TextField
              name="addressLine"
              label={t("Address Line 1")}
              value={values.adressLine1}
              onChange={handleChange}
              fullWidth
            />
          </Box>
          <Box className="col-lg-6 " sx={{
            [theme.breakpoints.up("md")]: {
              pl: 1,
            }, [theme.breakpoints.down("md")]: {
              pt: 3,
            },
          }}>
            {" "}
            <TextField
              name="addressLine2"
              label={t("Address Line 2 (Optional)")}
              value={values.adressLine1}
              onChange={handleChange}
              fullWidth
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
              error={!!errors.city}
              name="city"
              label={t("City")}
              value={values.city}
              helperText={errors.city}
              onChange={handleChange}
              fullWidth
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
              name="postalCode"
              label={t("Postal Code")}
              value={values.postalCode}
              onChange={handleChange}
              error={!!errors.postalCode}
              helperText={errors.postalCode}
              fullWidth
            />
          </Box>
        </Box>
        <Box sx={{
          display: "flex", pt: 1, pb: 2, [theme.breakpoints.down("md")]: {
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
              name="state"
              label={t("State")}
              value={values.state}
              onChange={handleChange}
              error={!!errors.state}
              helperText={errors.state}
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
              name="country"
              label={t("Country")}
              value={values.country}
              onChange={handleChange}
              error={!!errors.country}
              helperText={errors.country}
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

export default AddressForm;
