// External modules
import { createTheme } from "@material-ui/core/styles";
import { esES } from '@material-ui/core/locale';

// Internal modules
import colors from "./styles/colors";
// import fonts from "./styles/fonts";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primaryColor,
      contrastText: colors.contrastColor,
    },
    secondary: {
      main: colors.secondaryColor,
    },
    background: {
      default: colors.backgroundSecondaryColor,
      paper: colors.backgroundPrimaryColor,
    },
    text: {
      primary: colors.titleColor,
      secondary: colors.paragraphColor,
      danger: colors.dangerColor
    },
  },
}, esES);

export default theme;
