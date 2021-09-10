import { createTheme } from "@material-ui/core/styles";
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

//   typography: {
//     h1: { fontFamily: fonts.titleFont, fontWeight: 800 },
//     h2: { fontFamily: fonts.titleFont, fontWeight: 700 },
//     h3: { fontFamily: fonts.titleFont, fontWeight: 700 },
//     h4: { fontFamily: fonts.titleFont, fontWeight: 700 },
//     h5: { fontFamily: fonts.titleFont, fontWeight: 700 },
//     h6: { fontFamily: fonts.titleFont, fontWeight: 700 },
//     subtitle1: { fontFamily: fonts.titleFont, fontWeight: 700 },
//     subtitle2: { fontFamily: fonts.titleFont, fontWeight: 600 },
//     body1: { fontFamily: fonts.paragraphFont, fontWeight: 400 },
//     body2: { fontFamily: fonts.paragraphFont, fontWeight: 400 },
//     button: { fontFamily: fonts.titleFont, fontWeight: 800 },
//   },
});

export default theme;
