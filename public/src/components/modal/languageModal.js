import { Modal, useMantineTheme, Grid, Box } from "@mantine/core";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { i18n } from "../../i18n";

function LanguageModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  async function onClick() {}

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.1}
      overlayBlur={0.5}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <h1>{t("Select Language")}</h1>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4} padding={2} sx={{ margin: "8px" }}>
            <Button
              onClick={() => changeLanguage("dansk")}
              colorScheme="brandSecondary"
            >
              Dansk
            </Button>
          </Grid>
          <Grid item xs={2} sm={4} md={4} padding={2} sx={{ margin: "8px" }}>
            <Button
              onClick={() => changeLanguage("de")}
              colorScheme="brandSecondary"
            >
              Deutsch
            </Button>
          </Grid>
          <Grid item xs={2} sm={4} md={4} padding={2} sx={{ margin: "8px" }}>
            <Button
              onClick={() => changeLanguage("es")}
              colorScheme="brandSecondary"
            >
              Español
            </Button>
          </Grid>
          <Grid item xs={2} sm={4} md={4} padding={2} sx={{ margin: "8px" }}>
            <Button
              onClick={() => changeLanguage("en")}
              colorScheme="brandSecondary"
            >
              English
            </Button>
          </Grid>
          <Grid item xs={2} sm={4} md={4} padding={2} sx={{ margin: "8px" }}>
            <Button onClick={onClick} colorScheme="brandSecondary">
              Français
            </Button>
          </Grid>
          <Grid item xs={2} sm={4} md={4} padding={2} sx={{ margin: "8px" }}>
            <Button onClick={onClick} colorScheme="brandSecondary">
              Italiano
            </Button>
          </Grid>
          <Grid item xs={2} sm={4} md={4} padding={2} sx={{ margin: "8px" }}>
            <Button onClick={onClick} colorScheme="brandSecondary">
              Português (Brasil)
            </Button>
          </Grid>
          <Grid item xs={2} sm={4} md={4} padding={2} sx={{ margin: "8px" }}>
            <Button onClick={onClick} colorScheme="brandSecondary">
              Română
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

export default LanguageModal;
